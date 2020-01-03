import React from 'react';

import crossIcon from '../../assets/icons/cross.png'
import peakIcon from '../../assets/icons/peak.png';
import chirvaIcon from '../../assets/icons/chirva.png';
import boobaIcon from '../../assets/icons/booba.png';

import cx from './style.module.scss';

interface Props {
    isPreWiew: boolean;
    item: Item;
}

interface Item {
    type: 'cross' | 'peak' | 'chirva' | 'booba';
    rang: '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
}


class Card extends React.Component<Props> {

    getIcon = (type: 'cross' | 'peak' | 'chirva' | 'booba') => {
        const icon = {
        'cross' : crossIcon,
        'peak' :peakIcon,
        'chirva' : chirvaIcon, 
        'booba': boobaIcon,
        }
        return icon[type];
    }

    createCard = ({type, rang}: Item) => {
        const icon = this.getIcon(type);
        return (
            <div className={cx.card}>
                <div className={cx.header}>
                    <span>{rang}</span>
                    <img src={icon} className={cx.icon} />
                </div>
                <div className={cx.body}>
                    <img src={icon} className={cx.bodyIcon}  />
                </div>
                <div className={cx.footer}>
                    <span>{rang}</span>
                    <img src={icon} className={cx.icon} />
                </div>
            </div>
        )
    }

    createPewiev = () => {
        return (
            <div className={cx.cardPewiev}>
                
            </div>
        )
    }

    render() {
        const { item, isPreWiew  } = this.props;
        return isPreWiew ?  this.createPewiev() : this.createCard(item);
    }
}


export default Card;