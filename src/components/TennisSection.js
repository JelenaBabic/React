import React from 'react';
import '../App.css';
import Button from './Button';
import './TennisSection.css';

function TennisSection(props) {
  console.log("vdcbhkjwqlp ");
  return (
    <div className='hero-container'>
      <br></br>
      <br></br>
        <h1>{props.title}</h1><br></br>
        {props.secondTitle && (<><p>{props.secondTitle}</p><br></br></>)}
        <div className="tennis-btns">
           { props.signalFromPlayers && (<Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large' path="/tournaments">
                Tournaments
            </Button>)}
            { props.signalFromTournaments && ( <Button path="/players" className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>
                Players 
            </Button>)}
        </div>

    </div>
  )
}

export default TennisSection;