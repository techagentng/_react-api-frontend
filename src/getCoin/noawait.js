import React from 'react';

export default class Noawait extends React.Component{   
    //Declare state
   
    async componentDidMount(){
        const url = "https://cors-anywhere.herokuapp.com/localbitcoins.com/buy-bitcoins-online/NGN/.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({profile: data.data.ad_list[5].data.temp_price}); 
    }
  
    render(){
        return <div> Loading...</div>;        
    }
}

