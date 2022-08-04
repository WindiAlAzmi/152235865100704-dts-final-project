import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRightToBracket, faBars} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate} from 'react-router-dom';
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";



const Header = () => {
    let [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);


    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await signOut(auth);
       navigate('/login');
      }catch(err) {
        console.log(err);
      }
    
    
    }

    return (
      <header className="bg-white md:relative z-10  max-w-full md:p-2 border-box border border-white border-b-black">
        <div
          className="md:relative flex flex-col md:flex-row min-w-full
       bg-white mx-auto "
        >
          <div className="md:w-2/5 flex flex-row justify-between p-10 ">
            <div className="text-4xl  md:px-4">
              Flying Recipe
            </div>
            <div className="px-6 md:hidden hamburger">
              <FontAwesomeIcon icon={faBars} className="min-h-full " onClick={() => setOpen(!open)} />
            </div>
          </div>

          <div
            className="navBar md:w-3/5 text-2xl bg-white
           md:text-lg  md:flex absolute top-28  z-50 md:static w-full  "
          >
            <ul
              className={`md:flex md:z-40 md:w-full p-4 gap-2 items-start md:items-center 
            flex  md:gap-2 md:mx-auto 
            md:p-4 md:justify-around ${open ? "flex-col" : "hidden"}`}
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="icon ">
                <NavLink to="/search">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </NavLink>
              </li>
              <li>
                {!user.email ? (
                  <NavLink to="login">Login</NavLink>
                ) : (
                  <button onClick={handleLogout}>
                    <FontAwesomeIcon icon={faRightToBracket} />
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    );

}

export default Header;