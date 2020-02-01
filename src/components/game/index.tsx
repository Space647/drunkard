
import React from 'react';

import Card from '../card';

import getCardList from '../../utility/getCardList';

import cx from './game.module.scss';

class Game extends React.Component {


    componentDidMount(){
        this.gameStart();
    }

    async gameStart(){
         const cardList = await getCardList();
         console.log('cardList',cardList);
    }

    render() {
        return (
          <div>
            
          </div>
        )
    }
}


export default Game;