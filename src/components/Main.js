import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';

class Main extends React.Component{
    constructor(props){
        super(props)
    }
    
   
    render(){
    return(
<section className='container' >
<section className='landing'>


<header className='header_holder' >
<h1 className='header'>Hallmark Movie Plot Generator</h1> 
</header>
</section>  

<Landing />
</section>
          
    );}
}
    export default Main;