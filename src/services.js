import axios from "axios";

export const listAllMealByFirstLetter = (l) => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`);
}

export const searchMealByName = (str) => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${str}`);
}

export const getMealDetail = (id) => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
}

export const getRandomMeal = () => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
}

export const loadAllMealCategories = () => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
}