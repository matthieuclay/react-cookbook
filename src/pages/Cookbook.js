import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const Cookbook = () => {
  const [mealsData, setMealsData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchValue
      )
      .then((res) => {
        setMealsData(res.data.meals);
      });
  }, [searchValue]);

  return (
    <div className="Cookbook">
      <Header />
      <div className="search">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <div className="meals">
        {mealsData &&
          mealsData
            .slice(0, 24)
            .map((meal) => <Card key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default Cookbook;
