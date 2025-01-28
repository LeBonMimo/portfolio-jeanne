export function useUtils() {
  const getImageUrl = (item) => {
    if (item?.url) {
      return useStrapiMedia(item.url);
    }
    return null; // Retourne `null` si aucune cover n'est disponible
  };

  return { getImageUrl }
}