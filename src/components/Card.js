import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="Card">
      <h3>{meal.strMeal}</h3>
      <span>Origin: {meal.strArea}</span>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Card;
