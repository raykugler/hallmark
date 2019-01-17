import React from 'react';
import ReactDOM from 'react-dom';
import all_cat from './data';
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
        let verb_number = Math.floor(Math.random() * 63);   
        let noun = Math.floor(Math.random() * 5);   
        let adj_number = Math.floor(Math.random() * 48);
        let woman_number = Math.floor(Math.random() * 11); 
        let man_number = Math.floor(Math.random() * 4); 
        let introduction_number = Math.floor(Math.random() * 2);
        let job_number = Math.floor(Math.random() * 21);   
        let introduction = all_cat[0][introduction_number];
        let job = all_cat[1][job_number];
        let female_name = all_cat[2][woman_number];
        let male_name = all_cat[3][man_number];
        let adj_select = all_cat[4][adj_number];
        let verb_select = all_cat[5][verb_number];
        // all.push(verb_array[verb]);
        // all.push(adjective_array[adjective]);
        // all.push(noun_array[noun]);

        // console.log(all[0] + ' ' + all[1] + ' ' + all[2]);
        let story = [ introduction + ', ' + female_name + ', a ' + job + '.' + verb_select + adj_select ,
                      introduction + ', ' + male_name + ', a ' + job +'.' + verb_select + adj_select ,
                      male_name + ', a ' + job + verb_select + adj_select ,
                      female_name + ', a ' + job + verb_select + adj_select ,
                    ];
                      let story_number = Math.floor(Math.random() * 4);                
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