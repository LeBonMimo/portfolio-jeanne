export function useUtils() {
  const getImageUrl = (item) => {
    return item?.url || "../assets/fallback.png";
  };

  return { getImageUrl }
}