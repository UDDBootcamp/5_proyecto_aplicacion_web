import axios from "axios";

// Obtengo todos los personajes de la API de Rick and Morty
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

// Obtengo un personaje específico filtrado segun su nombre y estado
export const getFilteredCharacters = async (name, status) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al filtrar personajes: ", error);
    throw error;
  }
};
