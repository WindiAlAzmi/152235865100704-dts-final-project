import React,{useState} from "react";
import FilterPage2 from "../components/FilterPage2";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../containers/Footer";


const SearchCategory = () => {
    const { id } = useParams();

    console.log(id);

    console.log("inisearch");
    const [dataInput, setDataInput] = useState("");

    const navigate = useNavigate();

 

    const submitHandler = async event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const searchId = data.get("searchInput");

      await navigate(`/search/nameInput/${searchId}`);
     
    };
  return (
   <>
    <Header />
     <div className="w-full border-box flex flex-col items-center mt-20 gap-20 bg-slate-100 p-4">
    
        <form id="form" onSubmit={submitHandler} className="p-8 bg-white md:w-4/5 w-full box-border flex justify-between items-center h-20 border border-slate-600 text-grey-400 rounded-full group">
          <button type="submit" className="w-1/6 p-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-9 bg-white" />
          </button>
          <input
            value={dataInput}
            onChange={e => setDataInput(e.target.value)}
            id="searchInput"
            name="searchInput"
            type="text"
            placeholder="what are you looking for? ..."
            className="group bg:inherit w-4/6 h-16 text-lg mr-52 text-left border border-none focus:ring-0"
          />
        </form>
    
      <FilterPage2 />
    </div>
        <Footer />
  </>
  );
};

export default SearchCategory;
