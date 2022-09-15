import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import TennisSection from '../TennisSection';
import Footer from './Footer';

function Tournaments(){
    return(
        <>
          <div className='tournaments'>
            <TennisSection  
            title={"World wide tennis tour"} 
            secondTitle ={"Be part of it"}
            signalFromTournaments
            />
            </div>
            <Cards />
            <Footer />
            
     
        </>
    )
}

export default Tournaments;