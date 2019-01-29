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
<h1 className='header'>Hallmark Movie Plot <br/> Generator</h1> 
</header>
</section>  

<Landing />
<footer className='foot'>
<a href='https://raykugler.com/' className='port_link'>ray kugler</a>
</footer>
</section>
          
    );}
}
    export default Main;