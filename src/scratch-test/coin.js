import React, {useEffect, useState} from 'react';

function Coin(){

    useEffect(() =>{
        getCoin();
    });


    
    const getCoin = async()=>{
        const response = await fetch(`https://cors-anywhere.herokuapp.com/localbitcoins.com//sell-bitcoins-online/ngn/.json`)
        const data = await response.json();
        console.log(data);
    }

    const getCoinUSD = async()=>{
        const response = await fetch(`https://cors-anywhere.herokuapp.com/localbitcoins.com//sell-bitcoins-online/usd/.json`)
        const data = await response.json();
    }

    const getCoinEUR = async()=>{
        const response = await fetch(`https://cors-anywhere.herokuapp.com/localbitcoins.com//sell-bitcoins-online/eur/.json`)
        const data = await response.json();
    }
    return(
        <div className="App">
            

        </div>
    )
}

export default Coin;
