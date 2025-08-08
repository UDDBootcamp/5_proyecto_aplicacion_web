import axios from "axios";

export const getUserData = async () => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos de la API: ", error);
    throw error;
  }
};
