import React from "react";
import { useNavigate } from "react-router-dom";
import CardList from "./CardList";

const FilterPage2 = () => {

      const navigate = useNavigate();

      const handleDataCategory = id => {
        navigate(`/search/category/${id}`);
      };

   
  return (
    <div className="flex mb-10 flex-col md:flex-row bg-slate-100 md:justify-evenly ">
      <div className="flex flex-col p-4  text-left mb-10">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div
            className="collapse-title text-gray-800 text-2xl font-bold 
        bg-white"
          >
            Category
          </div>
          <div className="collapse-content text-primary-content bg-white">
            <p>
              <button onClick={() => handleDataCategory("Lamb")} className="bg-white rounded-md p-2 text-black text-base ">
                Lamb
              </button>
            </p>
            <p>
              <button onClick={() => handleDataCategory("Chicken")} className="bg-white rounded-md p-2 text-black text-base ">
                Chicken
              </button>
            </p>
            <p>
              <button onClick={() => handleDataCategory("Beef")} className="bg-white rounded-md p-2 text-black text-base ">
                Beef
              </button>
            </p>
            <p>
              <button onClick={() => handleDataCategory("Dessert")} className="bg-white rounded-md p-2 text-black text-base ">
                Dessert
              </button>
            </p>
            <p>
              <button onClick={() => handleDataCategory("Pasta")} className="bg-white rounded-md p-2 text-black text-base ">
                Pasta
              </button>
            </p>
            <p>
              <button onClick={() => handleDataCategory("Seafood")} className="bg-white rounded-md p-2 text-black text-base ">
                Seafood
              </button>
            </p>
            <p>
              <button onClick={() => handleDataCategory("Breakfast")} className="bg-white rounded-md p-2 text-black text-base ">
                Breakfast
              </button>
            </p>
          </div>
        </div>
      </div>

      <CardList />
    </div>
  );
};

export default FilterPage2;
