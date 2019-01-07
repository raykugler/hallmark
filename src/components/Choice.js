import React from 'react';
import ReactDOM from 'react-dom';

class Choice extends React.Component{
    constructor(props){
        super(props)
//         this.state = {
//             landing: 'main'
//   }
    }
    
    // choice=(e)=>{
    //     console.log('hhh');

    //     var the_choice = e;
    //     this.setState({
    //         landing: the_choice
    //       });
    //     console.log(this.state.landing + 'lllllll');
    //       this.swap();
    // }


    
   
    render(){
    return(
<section className='choice_buttons' >
<button className='madlib_button' ref='madlib' onClick={e =>this.props.choice('madlib')}>MadLib</button>
<button className='auto_button' ref='auto' onClick= {e =>this.props.choice('auto')}>Auto</button>  
         
</section>
          
    );}
}
export default Choice;
