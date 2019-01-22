import React from 'react';
import ReactDOM from 'react-dom';
import Cast from './Cast';
import Story from './Story';
class Auto extends React.Component{
    constructor(props){
        super(props)
    }   

    render(){
    return(
<section className='auto_holder' >
<Story landing={this.props.landing} 
        choice={this.props.choice}/>        


         
         
</section>
          
    );}
}
    export default Auto;

    // <button onClick= {this.story} className=''>Auto</button>

    // actresses: Jessica Lowndes; Maddie McCormack; Elaine Hendricks; Danielle Panabaker; Lucia Walters; Shannon Chan-Kent
    // Taylot Hastings; Jessy Schram; Rebekah Asselstine; Allisson Amigo;
    // actors: Michael Rady; Cole Gleason; Ben Estus; Matt Long; Michael Brian; Chad Michael Murray; Jeff Gonek; Cardi Wong; Mat Lo; 
    // angel people: Steve Larkin; Beverley Elliot; Gabrielle Rose; BJ Harrison;