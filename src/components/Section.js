import React from 'react';
import CardListSearch from '../components/CardListSearch';
import { useMealsDataQuery } from "../services/dataMeals";




const Section = () => {
        
      const { data, error, isLoading } = useMealsDataQuery();
      
      let dataMeal;
      if(data){
        dataMeal = data.meals.slice(1,10);
      }
      const loadData = isLoading ? <>loading</> : dataMeal.map(item => <CardListSearch key={item.idMeal} item={item} />);

    return (
      <div className="flex flex-col md:p-4 w-5/6 flex-wrap gap-8 container mx-auto text-gray-600 ">
        <div className="p-4 w-full">
          <div className="flex flex-row md:gap-4 md:justify-evenly flex-wrap w-full ">{ error ? <>error</> : loadData}</div>
        </div>
      </div>
    );
}

export default Section;