export const useApiCalls = () => {
  const { find, findOne } = useStrapi();

  const fetchProjects = async () => {
    try {
      const { data } = await find('projects', { populate: '*' });
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
      return [];
    }
  };

  const fetchProjectById = async (id) => {
    try {
      const { data } = await findOne('projects', id, { populate: '*' });
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération du projet:', error);
      return null;
    }
  };

  return { fetchProjects, fetchProjectById };
}
