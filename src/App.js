import React from "react";
import './App.css';
import {Collapse, Divider, Typography} from "antd";
import ListMealByFirstLetter from "./components/ListMealByFirstLetter";
import SearchMealByName from "./components/SearchMealByName";

const { Title } = Typography;
const { Panel } = Collapse;

function App() {
  return (
    <div className="App">
      <Title className="title" type="danger">Meal Finder</Title>
      <Divider/>

      <Collapse defaultActiveKey={['1']}>
        <Panel header="Search meals by name" key="1">
          <SearchMealByName/>
        </Panel>
        <Panel header="List meals by first letter" key="2">
          <ListMealByFirstLetter/>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <ListMealByFirstLetter/>
        </Panel>
      </Collapse>
    </div>
  );
}

export default App;
