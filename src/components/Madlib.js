import React from 'react';
import ReactDOM from 'react-dom';
import The_Form from './The_Form';
import Story from './Story';
import all_cat from './data';

class Madlib extends React.Component{
    constructor(props){
        super(props)
         this.state = {
                show: 'form',
                story_fact_array: []          
               }
    }   
    fill_choice=(e)=>{
        console.log('hhh');

        var after_select = e;
        this.setState({
            show: after_select
          });
        console.log(this.state.landing + 'lllllll');
       
    }
fill_for_me=(e)=>{
        let field_choice = document.getElementById(e);
        let field_id =field_choice.id;
if (field_id === 'female_name'){
    let number_choice = Math.floor(Math.random() * all_cat[2].length)
    let fill_word = all_cat[2][number_choice];
    document.getElementById(e).value= fill_word;
}
else if (field_id === 'male_name'){
    let number_choice = Math.floor(Math.random() * all_cat[3].length)
    let fill_word = all_cat[3][number_choice];
    document.getElementById(e).value= fill_word;
}

else if(field_id === 'adjective_one'){
    let number_choice = Math.floor(Math.random() * all_cat[4].length)
    let fill_word = all_cat[4][number_choice];
    document.getElementById(e).value= fill_word;
}
else if(field_id === 'job_one'){
    let number_choice = Math.floor(Math.random() * all_cat[1].length)
    let fill_word = all_cat[1][number_choice];
    document.getElementById(e).value= fill_word;

}
else if(field_id === 'adjective_two'){
    let number_choice = Math.floor(Math.random() * all_cat[4].length)
    let fill_word = all_cat[4][number_choice];
    document.getElementById(e).value= fill_word;
}
else if(field_id === 'nation'){
    let number_choice = Math.floor(Math.random() * all_cat[10].length)
    let fill_word = all_cat[10][number_choice];
    document.getElementById(e).value= fill_word;

}        
else if(field_id === 'job_two'){
    let number_choice = Math.floor(Math.random() * all_cat[1].length)
    let fill_word = all_cat[1][number_choice];
    document.getElementById(e).value= fill_word;
}
else if(field_id === 'myth'){
    let number_choice = Math.floor(Math.random() * all_cat[9].length)
    let fill_word = all_cat[9][number_choice];
    document.getElementById(e).value= fill_word;

}

    }
   make_story=(event)=>{
       
       let form_array = [];
       let female = document.getElementById("female_name").value;
       let male = document.getElementById("male_name").value;
       let adjOne = document.getElementById("adjective_one").value;
       let jobOne = document.getElementById("job_one").value;
       let adjTwo = document.getElementById("adjective_two").value;
       let jobTwo = document.getElementById("job_two").value;
       let natEth = document.getElementById("nation").value;
       let myth = document.getElementById("myth").value;
       form_array.push(female, male, adjOne, jobOne, adjTwo,jobTwo, natEth, myth);
       this.setState({story_fact_array: form_array});
        console.log('blurg' + this.state.story_fact_array);
        this.fill_choice('after_select');
        
    }
  

    render(){
        if(this.state.show === 'form'){
            return(
                <section className='madlib_holder' >
                    <The_Form fill_choice={this.fill_choice}
                                make_story={this.make_story}
                                fill_for_me={this.fill_for_me}
                                choice={this.props.choice}/>
                </section>
            )}

        else if(this.state.show === 'after_select'){
            return(
                <section className='madlib_holder' >
                    <Story fill_choice={this.fill_choice}
                    landing={this.props.landing}
                    story_fact_array={this.state.story_fact_array}
                    choice={this.props.choice}/>
                   
                </section>
)}
    ;}
}
    export default Madlib;

    
  