import React, { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useManu from "../../../Hook/useManu";
import OrderItem from "../OrderItem/OrderItem";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad","pizza", "soup","drinks","dessert"]
  const {category} = useParams()
  const initIndex = categories.indexOf(category)
  const [tabs, setTabs] = useState(initIndex);
  
  const [manu] = useManu();
  const salad = manu.filter((item) => item.category === "salad");
  const soup = manu.filter((item) => item.category === "soup");
  const dessert = manu.filter((item) => item.category === "dessert");
  const pizza = manu.filter((item) => item.category === "pizza");
  const drinks = manu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover img={orderCoverImg} title={"Our Shop"} />
      <div className="text-center my-5">
        <Tabs selectedIndex={tabs} onSelect={(index) => setTabs(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>drinks</Tab>
            <Tab>desserts</Tab>
          </TabList>
          <TabPanel>
            <OrderItem item={salad}/>
          </TabPanel>
          <TabPanel>
            <OrderItem item={pizza}/>
          </TabPanel>
          <TabPanel>
            <OrderItem item={soup}/>
          </TabPanel>
          <TabPanel>
            <OrderItem item={drinks}/>
          </TabPanel>
          <TabPanel>
            <OrderItem item={dessert}/>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
