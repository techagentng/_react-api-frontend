import React from 'react';

export default class Noawait extends React.Component{   
    //Declare state
   state = {
       loading: false,
   }
    async componentDidMount(){
        const url = "https://cors-anywhere.herokuapp.com/localbitcoins.com/buy-bitcoins-online/NGN/.json";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.data.ad_list[5].data.temp_price);
        this.setState({profile: data.data.ad_list[5].data.temp_price}); 
    }
  
    render(){
        return <div>{this.state.loading ? <div>heyyyyy true</div> : <div>Loading...</div>}</div>;        
    }
}

