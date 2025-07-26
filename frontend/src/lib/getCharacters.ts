export const API_URL = "http://localhost:3000/characters";

export const getCharacters = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
};
