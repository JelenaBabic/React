import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import TennisSection from '../TennisSection';
import Footer from './Footer';

function Home(){
    return(
        <>
          <div className='home-pages'>
            <TennisSection 
            title={"The best of the best"} 
            secondTitle ={"Join the community"}
            signalFromTournaments
            signalFromPlayers
            />
            </div>
            <Cards />
            <Footer />
            
        </>
    )
}

export default Home;