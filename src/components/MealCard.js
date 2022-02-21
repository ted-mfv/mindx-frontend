import {Card} from 'antd';
import {Link} from "react-router-dom";

const { Meta } = Card;

const MealCard = ({meal}) => {
  const {strMeal, strMealThumb, strTags, idMeal} = meal;

  return <Link to={`/meal/${idMeal}`}>
    <Card cover={<img alt="meal image" src={strMealThumb}/>}>
      <Meta title={strMeal} description={strTags}/>
    </Card>
  </Link>
}

export default MealCard;