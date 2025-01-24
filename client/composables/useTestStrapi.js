export function useTestStrapi() {
  const { $strapi } = useNuxtApp(); // Accès au module Strapi

  const testStrapi = async () => {
    try {
      const response = await $strapi.find('projets'); // Test d'une requête simple
      console.log('Réponse de Strapi :', response);
      return response;
    } catch (error) {
      console.error('Erreur lors de la connexion à Strapi :', error);
      return null;
    }
  };

  return { testStrapi };
}
