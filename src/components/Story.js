import React from 'react';
import ReactDOM from 'react-dom';
import all_cat from './data';
import Cast from './Cast';
const actress_image_array = ['jessica-lowndes', 'elaine-hendricks', 'danielle-panabaker', 'lucia-walters', 'shannon-chan-kent', 'taylor-hastings', 'jessy-schram'];
const actor_image_array = ['michael-rady', 'matt-long', 'michael-brian', 'chad-michael-murray', 'cardi-wong', 'mat-lo'];
const angel_image_array = ['steve-larkin', 'beverley-elliot', 'gabrielle-rose', 'bj-harrison'];
const title_one = [	'Love Frozen', 'One Winter',"Winter's", 'My Secret', 'Very, Very', 'Cooking With','Wedding', 'Royal',
                    'Love', 'The Sweetest','Royal', 'Home', 'Once Upon a','The Beach','Royally', 'Marrying','The Perfect', 'Love at First' ];
const title_two = ['on the Slopes', 'Love', 'Dream','Weekend','Valentine','March', 'Hearts',',Once and Always','Heart','Matchmaker',
                    'by Spring','Prince', 'Princess', 'House','Ever After','Bride','First Dance'];
let names=[];
class Story extends React.Component{
    constructor(props){
        super(props)
        this.state = { story: '',  
                    names:[],
                    title: 'title' 
    }   
}
    componentDidMount(){
        this.story();
        this.title_change();
    }
    title_change = () =>{
        let first_word_number = Math.floor(Math.random() * 18);
        let second_word_number = Math.floor(Math.random() * 17);
        let first_word = title_one[first_word_number];
        let second_word = title_two[second_word_number];
        let the_title = first_word + ' ' + second_word;
        this.setState({ title: the_title });

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
         + job + ', ' + happening_select + ' but ' + but_select + '.  Then she meets ' + male_name + 
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
            let adj_number_two = Math.floor(Math.random() * all_cat[4].length);
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
            let adj_select = ''
            let tempAdj = all_cat[4][adj_number] 
            console.log('vowel: ' + tempAdj)
            if( tempAdj.charAt(0) === 'a' || tempAdj.charAt(0) === 'e' ||tempAdj.charAt(0) === 'i' ||tempAdj.charAt(0) === 'o' ||tempAdj.charAt(0) === 'u'){
              adj_select = 'an ' + tempAdj;
            }
              else{
                  adj_select = 'a ' + tempAdj;
              }

              let adj_select_two = '';
              let tempAdjTwo = all_cat[4][adj_number_two];
              console.log('vowel: ' + tempAdjTwo)
              if( tempAdjTwo.charAt(0) === 'a' || tempAdjTwo.charAt(0) === 'e' ||tempAdjTwo.charAt(0) === 'i' ||tempAdjTwo.charAt(0) === 'o' ||tempAdjTwo.charAt(0) === 'u'){
                adj_select_two = 'an ' + tempAdjTwo;
              }
                else{
                    adj_select_two = 'a ' + tempAdjTwo;
                }

            let verb_select = all_cat[5][verb_number];
            let happening_select = all_cat[6][happening_number];
            let but_select = all_cat[7][but_number];
            let vague_select = all_cat[8][vague_number];
            let vague_a = '';
            if( vague_select.charAt(0) === 'a' || vague_select.charAt(0) === 'e' ||vague_select.charAt(0) === 'i' ||vague_select.charAt(0) === 'o' ||vague_select.charAt(0) === 'u'){
                vague_a = 'an';
              }
                else{
                vague_a = 'a';
                }
            let myth_select = all_cat[9][myth_number];
            let nationality_select = all_cat[10][nationality_number];
            names_array.push(vague_select + ' ' + nationality_select + ' ' + myth_select);
            console.log(names);        
            let story = [introduction + ', ' + female_name + ', '+ adj_select + ' '
             + job + ', ' + happening_select + ' but ' + but_select + '. Then she meets ' + male_name + 
             ', ' + adj_select_two + ' ' + job_two + '. ' + 'With the help of ' + vague_a + ' '
             + vague_select + ' ' + nationality_select + ' ' + myth_select + ' , ' + female_name + ' finds love where she least expects it.' 
              ];
             this.setState({ story: (story[0]) });
             this.setState({ names: names_array });
             console.log('ggg ' + this.state.names);

         }
        
    }
    
again=()=>{
    this.story();
    this.title_change();
    this.refs.cast.fill_call();
}
    render(){
    return(
        <section className='story_holder'> 
        <p className='title'>{this.state.title}</p>       
        <p className='story'>{this.state.story}</p>
        <Cast ref='cast' names={this.state.names}/>
        <button onClick={this.again} className='again_button'><img src='/images/again.png' className='again_image' />Again</button>
        <button onClick= {e =>this.props.choice('main')} className='back_button'><img src='/images/book_two.png' className='again_image' />Home</button>
        </section>

         

          
    );}
}
    export default Story;

    // <button onClick={e => this.fill_call()} className='fill_button'>Fill Call</button>