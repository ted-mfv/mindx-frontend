import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Button, Card, Spin, Typography} from "antd";
import {getMealDetail, getRandomMeal} from "../services";

const {Title} = Typography;

export default () => {
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState({});
  const {idMeal} = useParams();

  useEffect(async () => {
    const { data } = await getMealDetail(idMeal);
    setMeal(data.meals[0]);
    setLoading(false);
    console.log(data.meals[0]);
  }, []);

  const handleGetRandomMeal = async () => {
    setLoading(true);
    const { data } = await getRandomMeal();
    setMeal(data.meals[0]);
    setLoading(false);
    console.log(data.meals[0]);
  }

  const {
    strCategory,
    dateModified,
    strArea,
    strCreativeCommonsConfirmed,
    strDrinkAlternate,
    strImageSource,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
    strInstructions,
    strMeal,
    strMealThumb,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20,
    strSource,
    strTags,
    strYoutube,
  } = meal;

  return <div className="detail-container">
    <div>
      <div className="btn-area">
        <Link to="/">
          <Button type="primary">Back to dashboard</Button>
        </Link>

        <Button onClick={handleGetRandomMeal}>Random Meal</Button>
      </div>

      {loading ? <div className="loading-container"><Spin/></div> : <div className="detail-content">
        <Card size="small" title={strMeal} style={{ width: '100%' }}>
          <Title level={4}>Image</Title>
          <div className="image-container">
            <img src={strMealThumb} alt="Image" className="image"/>
          </div>
          <Title level={4}>Ingredients</Title>
            <ul>
              <li>{strIngredient1}</li>
              <li>{strIngredient2}</li>
              <li>{strIngredient3}</li>
              <li>{strIngredient4}</li>
              <li>{strIngredient5}</li>
            </ul>
          <Title level={4}>Instructions</Title>
          <div>{strInstructions}</div>
        </Card>
      </div>}
    </div>
  </div>
}