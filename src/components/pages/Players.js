import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import TennisSection from '../TennisSection';
import Footer from './Footer';

function Players(){
    return(
        <>
          <div className='players'>
            <TennisSection  
            title={"Follow your favorite player"} 
            signalFromPlayers
            />
            </div>
            <Cards />
            <Footer />
            
     
        </>
    )
}

export default Players;