import React from 'react';
import Section from '../components/Section';
import Hero from '../components/Hero';
import Header from "../components/Header";
import Footer from "../containers/Footer";

const Home = () => {
    return (
         <>
          <Header />
         <div className="  flex flex-col gap-6  justify-center w-full bg-slate-100">
            <div className="bg-white ">
                <Hero />
            </div>
            <Section />
          
      
        </div>
          <Footer />
        </>
    )
}

export default Home;