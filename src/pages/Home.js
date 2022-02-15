import React from 'react';
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import "./home.css";
import { userData } from "./TableData";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}