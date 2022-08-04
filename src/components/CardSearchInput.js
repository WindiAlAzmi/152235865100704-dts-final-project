import React from "react";
import CardListSearchIsi from "./CardListSearchIsi";
import { useSearchByIdQuery } from "../services/dataMeals";


const CardSearchInput = (props) => {
console.log(props);
  const { data, error, isLoading } = useSearchByIdQuery(props.searchId);
  
  let dataInputan ;
  let errorm;

  if(data){
      if(data.meals === null ) {
         errorm = true;
           
        } else {
         dataInputan = data.meals;
           errorm = false;
        }
   
  }



  return (
    <div className="w-5/6  bg-slate-100 flex flex-col mx-auto">
      <h1 className="font-bold text-gray-800 text-center text-2xl mb-3 mt-4 ">Product</h1>
        {error ? (
          <>oh noo, erorr</>
        ) : isLoading ? (
          <div className="rounded-lg w-full p-2 md:p-0 drop-shadow-lg  text-base md:w-1/4 h-auto rounded-t-lg flex flex-col">
            <h1>loading</h1>
          </div>
        ) : data ? (
          <div className="w-full container flex md:justify-evenly gap-5 md:flex-row flex-col items-center md:gap-8 
        flex-wrap justify-between">
            {errorm ? <p className="mt-10 text-red-600 md:mt-20 mb-0 lg:mb-32 mx-auto"> 
            Data is not found </p> : dataInputan?.map(item => <CardListSearchIsi key={item.idMeal} item={item} className="w-1/2 my-4 lg:w-2/6 xl:w-3/12" />)}
          </div>
        ) : null}
      </div>
    
  );
};

export default CardSearchInput;
