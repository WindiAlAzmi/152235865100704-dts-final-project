import React from "react";
import { useNavigate} from "react-router-dom";

const CardListSearchIsi = ({item}) => {

  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/search/${id}`);
  }
   
  return (
    <>
      <div key={item.idMeal} className="rounded-lg w-full p-2 md:p-0 drop-shadow-lg  text-base md:w-1/4 h-auto rounded-t-lg flex flex-col">
 
          <div className="flex flex-col  bg-yellow rounded-t-lg text-gray-800">
            <img src={item.strMealThumb} alt="ini gambar" className="h-60 md:h-48 object-cover bg-center rounded-t-lg" onClick={()=> handleDetail(item.idMeal)}/>
          </div>
          <div className="bg-white rounded-b-lg text-base flex flex-col p-4">
            <h1 className="text-2xl text-gray-800 font-bold text-center">{item.strMeal}</h1>
            <p className="text-gray-500">{item.strArea}</p>
          </div>
     
      </div>
    </>
  );
};

export default CardListSearchIsi;
