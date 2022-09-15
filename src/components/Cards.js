import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out our suggestions!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem
                    src='pic/player.jpg'
                    text='Get to know players'
                    label='Players'
                    path='/players'
                    />
                    <CardItem
                    src='pic/tournament.jpg'
                    text='Visit different tournaments'
                    label='Tournaments'
                    path='/tournaments'
                    />
                    
                    </ul>
                </div>

            </div>

    </div>
  )
}

export default Cards;