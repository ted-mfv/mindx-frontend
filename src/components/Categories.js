import React, {useEffect, useState} from "react";
import {loadAllMealCategories} from "../services";
import {Card, Spin} from "antd";

const { Meta } = Card;


const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(async() => {
    const {data} = await loadAllMealCategories();
    setCategories(data.categories);
    console.log(data.categories);
    setLoading(false);
  }, [])

  if(loading) {
    return <div className="loading-container"><Spin/></div>;
  }
  return <div className="container">
    {categories.map(item => <Card cover={<img alt="meal image" src={item.strCategoryThumb}/>}>
      <Meta title={item.strCategory} description={item.strCategoryDescription}/>
    </Card>)}
  </div>
}

export default Categories;