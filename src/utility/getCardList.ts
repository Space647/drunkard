import { ICard } from '../interface/card';

export default async () => {
    
    const cardList = createListCard();
    const shaffleArray = shuffle(cardList);
    return shaffleArray;

}


const shuffle = (array:any[]) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  

 
const createListCard = () => {
    const types = ['cross','peak','chirva','booba'];
    const rangs = ['6', '7', '8', '9', '10', 'J','Q','K','A'];

    return types.reduce((acum: ICard[], cardType)=>{

        const list = rangs.map((cardRang) => {
            return {
                type: cardType,
                rang: cardRang
            } as ICard;
        });

        return acum.concat(list);
        
    },[]) as ICard[]
}