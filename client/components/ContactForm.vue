<template>
  <div class="contact">
    <div class="contact-container">
      <h1>
        <span>{{ data.title }}</span>
        <svg width="45" height="43" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.9544 21.2011C10.1844 19.3487 11.3706 17.2095 12.0361 15.8889C12.9335 14.1082 13.7957 12.0718 14.767 10.5027C15.8026 8.82976 16.8217 6.9484 17.9114 5.47721C18.4138 4.79892 19.129 3.32239 19.6214 2.90422"
            stroke="currentColor" stroke-width="5" stroke-linecap="round" />
          <path
            d="M21.7385 33.1558C22.9539 31.4207 25.3899 29.9831 26.8188 29.0546C28.7456 27.8025 30.765 26.2698 32.6654 25.2775C34.6914 24.2196 36.8068 22.9404 38.7892 22.1201C39.7032 21.7419 41.2685 20.6859 42.0369 20.5651"
            stroke="currentColor" stroke-width="5" stroke-linecap="round" />
          <path
            d="M3 17.6484C3.14208 16.504 3.28416 15.3597 3.42623 14.2153C3.55464 13.181 4.34703 12.2138 4.48413 11.1096"
            stroke="currentColor" stroke-width="5" stroke-linecap="round" />
          <path
            d="M16.622 25.5457C17.5001 24.2637 18.3782 22.9817 19.2563 21.6997C20.05 20.541 21.2601 19.6429 22.1075 18.4058"
            stroke="currentColor" stroke-width="5" stroke-linecap="round" />
          <path
            d="M25.752 40.1879C26.1691 40.0717 26.6025 40.1971 27.0196 40.1099C27.3925 40.032 27.6788 39.7049 28.0648 39.6801C28.738 39.6369 29.3884 39.2785 30.0248 39.273"
            stroke="currentColor" stroke-width="5" stroke-linecap="round" />
        </svg>

      </h1>
      <p>{{ data.description }}</p>

      <form @submit.prevent="handleSubmit">
        <div class="form-semicolumn">
          <div class="form-input">
            <label for="name">Nom</label>
            <input id="name" type="text" name="name" v-model="formData.name" placeholder=" "
              oninvalid="this.setCustomValidity('Entrez votre nom')" oninput="this.setCustomValidity('')" required />
          </div>

          <div class="form-input">
            <label for="email">Email</label>
            <input id="email" type="email" name="email" v-model="formData.email" placeholder=" "
              oninvalid="this.setCustomValidity('Entrez votre email')" oninput="this.setCustomValidity('')" required />
          </div>
        </div>

        <div class="form-input">
          <label for="subject">Sujet</label>
          <input id="subject" type="text" name="subject" placeholder=" " v-model="formData.subject" />
        </div>

        <div class="form-input">
          <label for="message">Message</label>
          <textarea id="message" name="message" v-model="formData.message" placeholder=" "
            oninvalid="this.setCustomValidity('Entrez un message')" oninput="this.setCustomValidity('')"
            required></textarea>
        </div>
        <div class="contact-button">
          <button type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
//data fetching
defineProps({
  data: {
    data: Object,
    required: true,
  },
})

//form validation
import emailjs from '@emailjs/browser';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const sendEmail = (templateParams) => {
  const serviceID = 'service_uw9jj6a';
  const templateID = 'template_4jrz9t9';
  const userID = 'nU-nk5pqIZArIv0RJ';

  emailjs.send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success("Votre message a été envoyé avec succès.", {
        autoClose: 2000,
      });
      
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }, (err) => {
      console.error('FAILED...', err);
      toast.error("Une erreur s'est produite lors de l'envoi de votre message.", {
        autoClose: 2000,
      });
    });
};

const handleSubmit = () => {

  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    toast.error("Tous les champs obligatoires doivent être remplis.", {
      autoClose: 2000,
    });
    
    return;
  }

  if (!validateEmail(formData.value.email)) {
    toast.error("Veuillez entrer une adresse email valide.", {
        autoClose: 2000,
      });
    return;
  }

  const templateParams = {
    from_name: formData.value.name,
    from_email: formData.value.email,
    subject: formData.value.subject,
    message: formData.value.message
  };

  sendEmail(templateParams);
};
</script>




<style lang="scss" scoped>
@use '@/assets/css/contactForm.scss';
</style>
