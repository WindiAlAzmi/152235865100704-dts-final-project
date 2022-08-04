import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {Link } from 'react-router-dom';


const CardListIsi = ({item}) => {
  

    return (
      <>
        <div key={item.idMeal} className="w-full p-16 md:p-0 drop-shadow-lg  text-base md:w-1/4 h-auto rounded-t-lg flex flex-col">
          <Link to=":productId">
            <div className="flex flex-col gap-16  h-32 bg-white rounded-t-lg text-gray-800">
              <img src={item.strCategoryThumb} alt="ini gambar" />
              <div className="bg-pink-300 flex flex-row-reverse">
                <FontAwesomeIcon icon={faHeart} className="h-8 mr-4" />
              </div>
            </div>
            <div className="bg-white rounded-b-lg text-base flex flex-col p-4">
              <h1 className="text-2xl text-gray-800 font-bold text-center">{item.strCategory}</h1>
              <p className="text-gray-600">{item.strCategoryDescription}</p>
            </div>
          </Link>
        </div>

     
      </>
    );
}

export default CardListIsi;