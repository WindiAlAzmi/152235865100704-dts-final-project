import React from  'react';
import CardDetail from './CardDetail';
import { useMealsByIdQuery } from "../services/dataMeals";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../containers/Footer";

const CardPage = () => {
   const { productId } = useParams();
   
  const { data, error, isLoading } = useMealsByIdQuery(productId);


      
  let dataInputan;
  let errorm;

  if (data) {
    if (data.meals === null) {
      errorm = true;
    } else {
      dataInputan = data.meals;
      errorm = false;
    }
  }


    return (
      <>
        <Header />
        <div className="bg-slate-100 p-4 flex flex-row w-full">
          {error ? (
            <p>there is no id</p>
          ) : isLoading ? (
            <p>Loading</p>
          ) : data ? (
            <div className="flex w-full flex-row flex-wrap pt-4">
              {errorm ? <p className="mt-10 text-red-600 md:mt-20 mb-0 lg:mb-32 mx-auto"> Data is not found </p> : dataInputan?.map(item => <CardDetail key={item.idMeal} item={item} className="w-1/2 my-4 lg:w-2/6 xl:w-3/12" />)}
            </div>
          ) : null}
        </div>
        <Footer />
      </>
    );
}

export default CardPage;