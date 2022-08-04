import React from "react";
import CardListSearchIsi from "./CardListSearchIsi";
import {  useMealsDataQuery } from "../services/dataMeals"; 

const CardListSearch = () => {
   const { data, error, isLoading } = useMealsDataQuery();

    let loadData = isLoading ? <>loading</> : data.meals.map(item => <CardListSearchIsi key={item.idMeal} item={item} />); 
  
  
     

  return (
    <div className="w-5/6  bg-slate-100 flex flex-col mx-auto">
      <h1 className="font-bold text-gray-800 text-center text-2xl mb-10 mt-4 ">Product</h1>
      <div
        className="w-full container flex md:justify-evenly gap-5 md:flex-row flex-col items-center md:gap-8 
        flex-wrap justify-between"
      >
 
        {error ? <>oh no, error!!</> : loadData }
      </div>
    </div>
  );
};

export default CardListSearch;
