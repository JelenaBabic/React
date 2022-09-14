import React from 'react';
import '../App.css';
import Button from './Button';
import './TennisSection.css';

function TennisSection() {
  console.log("vdcbhkjwqlp ");
  return (
    <div className='hero-container'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        {/* <video src='/video/video-1.mp4' autoPlay loop muted /> */}
        {/* <img src='/pic/tennis1.jpg'/> */}
        <h1>The best of the best</h1><br></br>
        <p>Join the community</p><br></br>
        <div className="tennis-btns">
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large' path="/tournaments">
                Tournaments
            </Button>
            <Button path="/players" className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>
                Players 
            </Button>
        </div>

    </div>
  )
}

export default TennisSection;