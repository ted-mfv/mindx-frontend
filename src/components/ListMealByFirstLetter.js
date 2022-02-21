import React, {useEffect, useState} from "react";
import {listAllMealByFirstLetter} from "../services";
import MealCard from "./MealCard";
import {Input, Spin} from "antd";

const ListMealByFirstLetter = () => {
  const [letter, setLetter] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    if (letter.length === 1) {
      setLoading(true);
      const {data} = await listAllMealByFirstLetter(letter);
      setMeals(data.meals);
      setLoading(false);
    }
  }, [letter]);

  if(loading) {
    return <div className="loading-container"><Spin/></div>;
  }

  return<>
    <div className="input-container">
      <Input placeholder="Enter a letter to list meals ..." value={letter}
             onChange={(e) => setLetter(e.target.value)}/>
    </div>
    <div className="container">
      {meals.map(meal => <MealCard key={meal.idMeal} meal={meal}/>)}
    </div>
  </>
}

export default ListMealByFirstLetter;