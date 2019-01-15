import React from 'react';
import ReactDOM from 'react-dom';

class Auto extends React.Component{
    constructor(props){
        super(props)
    }   
    story = () => {
    let verb_array = ['a verb', 'b verb', 'c verb', 'd verb', 'e verb', 'f verb'];
    let adjective_array = ['a adj', 'b adj', 'c adj', 'd adj', 'e adj', 'f adj'];
    let noun_array = ['a noun', 'b noun', 'c noun', 'd noun', 'e noun', 'f noun'];
let all = []
        let verb = Math.floor(Math.random() * 5);   
        let noun = Math.floor(Math.random() * 5);   
        let adjective = Math.floor(Math.random() * 5);   
        
        all.push(verb_array[verb]);
        all.push(adjective_array[adjective]);
        all.push(noun_array[noun]);

        console.log(all[0] + ' ' + all[1] + ' ' + all[2]);
    }
    render(){
    return(
<section className='auto_holder' >
         <button onClick= {e =>this.props.choice('main')}>Back</button>
         <button onClick= {this.story}>Auto</button>
</section>
          
    );}
}
    export default Auto;