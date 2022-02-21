import React from "react";
import {Collapse, Divider, Typography} from "antd";
import SearchMealByName from "../components/SearchMealByName";
import ListMealByFirstLetter from "../components/ListMealByFirstLetter";
import Categories from "../components/Categories";

const { Title } = Typography;
const { Panel } = Collapse;

const Home = ( ) => {
  return (
    <div>
      <Title className="title" type="danger">Meal Finder</Title>
      <Divider/>

      <Collapse defaultActiveKey={['3']}>
        <Panel header="All Categories" key="3">
          <Categories/>
        </Panel>
        <Panel header="Search meals by name" key="1">
          <SearchMealByName/>
        </Panel>
        <Panel header="List meals by first letter" key="2">
          <ListMealByFirstLetter/>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Home;