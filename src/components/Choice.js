import React from 'react';
import ReactDOM from 'react-dom';

class Choice extends React.Component{
    constructor(props){
        super(props)

    }
    
   
    render(){
    return(
<section className='choice_buttons' >
<button className='madlib_button' ref='madlib' onClick={e =>this.props.choice('madlib')}>MadLib</button>
<button className='auto_button' ref='auto' onClick= {e =>this.props.choice('auto')}>Auto</button>  
         
</section>
          
    );}
}
export default Choice;
