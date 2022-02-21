import axios from "axios";

export const listAllMealByFirstLetter = (l) => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`);
}

export const searchMealByName = (str) => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${str}`);
}