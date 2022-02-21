import React, {useState} from "react";
import {searchMealByName} from "../services";
import MealCard from "./MealCard";
import {Button, Input, Spin, Typography} from "antd";

const {Text}= Typography;

const SearchMealByName = () => {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (query !== '') {
      setLoading(true);
      const {data} = await searchMealByName(query);
      setMeals(data.meals || []);
      setLoading(false);
    }
  }

  return (
    <>
      <div className="input-container">
        <Input.Group compact>
          <Input style={{ width: 'calc(100% - 100px)' }} defaultValue={query} onChange={e => setQuery(e.target.value)} />
          <Button type="primary" onClick={handleSearch}>Search</Button>
        </Input.Group>
      </div>
      {meals.length === 0 && <Text type="secondary">There is no result, please input other search string.</Text>}
      {
        loading ? <div className="loading-container"><Spin/></div> : <div className="container">
        {meals.map(meal => <MealCard key={meal.idMeal} meal={meal}/>)}
      </div>
      }
    </>
  );
}

export default SearchMealByName;