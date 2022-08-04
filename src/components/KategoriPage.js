import React from "react";
import { useNavigate } from "react-router-dom";


const KategoriPage = () => {

  const navigate = useNavigate();

  const handleDataCategory = (id) => {
      navigate(`/category/search/${id}`);
  }
  return (
    <div className="flex flex-col p-4  text-left mb-10">
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div
          className="collapse-title text-gray-800 text-2xl font-bold 
        bg-white"
        >
          Kategori
        </div>
        <div className="collapse-content text-primary-content bg-white">
          <p>
            <button onClick={() => handleDataCategory("Lamb")} className="bg-white rounded-md p-2 text-black text-base ">
              kategori minuman
            </button>
          </p>
          <p>
            <button onClick={() => handleDataCategory("Chicken")} className="bg-white rounded-md p-2 text-black text-base ">
              kategori makanan
            </button>
          </p>
        </div>
      
      </div>

    </div>
  );
};

export default KategoriPage;
