import React, {useEffect} from 'react';

function Coin(){

    useEffect(() =>{
        getCoin();

    },[]);


    
    const getCoin = async()=>{
        const response = await fetch(`https://cors-anywhere.herokuapp.com/localbitcoins.com/buy-bitcoins-online/NGN/.json`);
        const data = await response.json();
        
        console.log(data.data);
    } 

   

    return(
        <div className="Coin">
            <h1>Heading</h1>
        </div>
    )

}

export default Coin;
