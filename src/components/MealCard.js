import { Card } from 'antd';

const { Meta } = Card;

const MealCard = ({meal}) => {
  const {strMeal, strMealThumb, strTags} = meal;

  return <Card
    cover={<img alt="meal iamge" src={strMealThumb} />}
  >
    <Meta title={strMeal} description={strTags} />
  </Card>
}

export default MealCard;