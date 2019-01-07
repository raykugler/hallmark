import React from 'react';
import ReactDOM from 'react-dom';

class Auto extends React.Component{
    constructor(props){
        super(props)
    }   
    
   
    render(){
    return(
<section className='auto_holder' >
         <button onClick= {e =>this.props.choice('main')}>Back</button>
</section>
          
    );}
}
    export default Auto;