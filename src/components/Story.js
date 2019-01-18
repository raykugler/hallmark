import React from 'react';
import ReactDOM from 'react-dom';
import all_cat from './data';
import Cast from './Cast';
const actress_image_array = ['jessica-lowndes', 'elaine-hendricks', 'danielle-panabaker', 'lucia-walters', 'shannon-chan-kent', 'taylor-hastings', 'jessy-schram'];
const actor_image_array = ['michael-rady', 'matt-long', 'michael-brian', 'chad-michael-murray', 'cardi-wong', 'mat-lo'];
const angel_image_array = ['steve-larkin', 'beverley-elliot', 'gabrielle-rose', 'bj-harrison'];
let names=[];
class Story extends React.Component{
    constructor(props){
        super(props)
        this.state = { story: '',  
                    names:[] 
    }   
}
    componentDidMount(){
        this.story();
    }
    story = () => {
        if(this.props.landing === 'madlib'){

            console.log('fred' + this.props.show_fact_array);
        let introduction_number = Math.floor(Math.random() * all_cat[0].length);
        let happening_number = Math.floor(Math.random() * all_cat[6].length);
        let but_number = Math.floor(Math.random() * all_cat[7].length);
        let vague_number = Math.floor(Math.random() * all_cat[8].length);  
        let verb_number = Math.floor(Math.random() * all_cat[5].length);  
        
       console.log(this.props.show_fact_array);
        let names_array = [];
        let introduction = all_cat[0][introduction_number];
        let happening_select = all_cat[6][happening_number];
        let but_select = all_cat[7][but_number];
        let vague_select = all_cat[8][vague_number];
        let verb_select = all_cat[5][verb_number];

        let female_name = this.props.story_fact_array[0];
        let male_name = this.props.story_fact_array[1];
        let adj_select = this.props.story_fact_array[2];
        let job = this.props.story_fact_array[3];
        let adj_select_two = this.props.story_fact_array[4];
        let job_two = this.props.story_fact_array[5];
        let nationality_select = this.props.story_fact_array[6];
        let myth_select = this.props.story_fact_array[7];
        names_array.push(female_name); 
        names_array.push(male_name);
        names_array.push(vague_select + ' ' + nationality_select + ' ' + myth_select);
        console.log(names);


        
        let story = [introduction + ', ' + female_name + ', a ' + adj_select + ' '
         + job + ', ' + happening_select + ' but ' + but_select + '.  Then she ' + verb_select + ' ' + male_name + 
         ', a ' + adj_select_two + ' ' + job_two + '. ' + 'With the help of a ' + ' ' 
         + vague_select + ' ' + nationality_select + ' ' + myth_select + ' , ' + female_name + ' finds love where she least expects it.' 
          ];
         this.setState({ story: (story[0]) });
         this.setState({ names: names_array });
         console.log('ppp ' + this.state.names);
        }
         else if(this.props.landing === 'auto'){        
             let introduction_number = Math.floor(Math.random() * all_cat[0].length);
            let job_number = Math.floor(Math.random() * all_cat[1].length);   
            let job_number_two = Math.floor(Math.random() * all_cat[1].length);   
            let woman_number = Math.floor(Math.random() * all_cat[2].length); 
            let man_number = Math.floor(Math.random() * all_cat[3].length); 
            let adj_number = Math.floor(Math.random() * all_cat[4].length);
            let verb_number = Math.floor(Math.random() * all_cat[5].length);   
            let adj_number_two = Math.floor(Math.random() * all_cat[5].length);
            let happening_number = Math.floor(Math.random() * all_cat[6].length);
            let but_number = Math.floor(Math.random() * all_cat[7].length);
            let vague_number = Math.floor(Math.random() * all_cat[8].length);   
            let myth_number = Math.floor(Math.random() * all_cat[9].length);   
            let nationality_number = Math.floor(Math.random() * all_cat[10].length);      
    
            let names_array = [];
            let introduction = all_cat[0][introduction_number];
            let job = all_cat[1][job_number];
            let job_two = all_cat[1][job_number_two];
            let female_name = all_cat[2][woman_number];
            names_array.push(female_name);
            let male_name = all_cat[3][man_number];
            names_array.push(male_name);
            let adj_select = all_cat[4][adj_number];
            let adj_select_two = all_cat[4][adj_number_two];
            let verb_select = all_cat[5][verb_number];
            let happening_select = all_cat[6][happening_number];
            let but_select = all_cat[7][but_number];
            let vague_select = all_cat[8][vague_number];
            let myth_select = all_cat[9][myth_number];
            let nationality_select = all_cat[10][nationality_number];
            names_array.push(vague_select + ' ' + nationality_select + ' ' + myth_select);
            console.log(names);        
            let story = [introduction + ', ' + female_name + ', a ' + adj_select + ' '
             + job + ', ' + happening_select + ' but ' + but_select + '.  Then she ' + verb_select + ' ' + male_name + 
             ', a ' + adj_select_two + ' ' + job_two + '. ' + 'With the help of a ' + ' ' 
             + vague_select + ' ' + nationality_select + ' ' + myth_select + ' , ' + female_name + ' finds love where she least expects it.' 
              ];
             this.setState({ story: (story[0]) });
             this.setState({ names: names_array });
             console.log('ggg ' + this.state.names);

         }
        
    }
    
again=()=>{
    this.story();
    this.refs.cast.fill_call();
}
    render(){
    return(
        <section className='story_holder'>        
        <p className='story'>{this.state.story}</p>
        <Cast ref='cast' names={this.state.names}/>
        <button onClick={this.again}>Story</button>
        </section>

         

          
    );}
}
    export default Story;

    // <button onClick={e => this.fill_call()} className='fill_button'>Fill Call</button>