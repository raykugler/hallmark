import React from 'react';
import ReactDOM from 'react-dom';
const actress_image_array = ['jessica-lowndes', 'elaine-hendricks', 'danielle-panabaker', 'lucia-walters', 'shannon-chan-kent', 'taylor-hastings', 'jessy-schram'];
const actor_image_array = ['michael-rady', 'matt-long', 'michael-brian', 'chad-michael-murray', 'cardi-wong', 'mat-lo'];
const angel_image_array = ['steve-larkin', 'beverley-elliot', 'gabrielle-rose', 'bj-harrison'];

class Cast extends React.Component{
    constructor(props){
        super(props)
        this.state = { story: '',  

    }   
}
    componentDidMount(){
        this.story();
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
        let story = [ 'this is story one. this is the first noun ' + all[2] + '. This is the first adjective ' + all[1] + '.',
                      'this is story two. this is the first noun ' + all[2] + '. This is the first adjective ' + all[1] + '.',
                      'this is story three. this is the first noun ' + all[2] + '. This is the first adjective ' + all[1] + '.',
                      'this is story four. this is the first noun ' + all[2] + '. This is the first adjective ' + all[1] + '.',
                      'this is story five. this is the first noun ' + all[2] + '. This is the first adjective ' + all[1] + '.',
                      'this is story six. this is the first noun ' + all[2] + '. This is the first adjective ' + all[1] + '.',
                      'this is story seven. this is the first noun ' + all[2] + '. This is the first adjective ' + all[1] + '.' ];
                      let story_number = Math.floor(Math.random() * 6);                
                      this.setState({ story: (story[story_number]) });
  
    }


    render(){
    return(
        <section className='story_holder'>        
        <p>{this.state.story}</p>

        </section>

         

          
    );}
}
    export default Cast;

    // <button onClick={e => this.fill_call()} className='fill_button'>Fill Call</button>