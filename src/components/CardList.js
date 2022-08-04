import React from "react";
import CardListSearchIsi from "./CardListSearchIsi";
import { useCategoryByIdQuery } from "../services/dataMeals";
import { useParams } from "react-router-dom";


const CardList = () => {
   const { categoryId } = useParams();

   const { data, error, isLoading } = useCategoryByIdQuery(categoryId);

    let loadData = isLoading ? (

        <h1>loading</h1>
     
    ) : (
      data.meals.map(item => <CardListSearchIsi key={item.idMeal} item={item} />)
    );




  return (
    <div className="w-5/6  bg-slate-100 flex flex-col mx-auto">
      <h1 className="font-bold text-gray-800 text-center text-2xl mb-3 mt-4 ">Product</h1>
      <div
        className="w-full container flex md:justify-evenly gap-5 md:flex-row flex-col items-center md:gap-8 
        flex-wrap justify-between"
      >
        {error ? <>oh no, error!!</> : loadData}
      </div>
    </div>
  );
};

export default CardList;
