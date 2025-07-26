export const API_URL = import.meta.env.VITE_API_URL as string;

console.log(API_URL);

export const getCharacters = async () => {
  try {
    if (!API_URL) {
      throw new Error("API_URL is not defined in the environment variables.");
    }
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
};
