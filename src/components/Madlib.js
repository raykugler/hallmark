import React from 'react';
import ReactDOM from 'react-dom';
import The_Form from './The_Form';
import Story from './Story';

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
    log=()=>{
        console.log(this.state.story_fact_array);
    }

    render(){
        if(this.state.show === 'form'){
            return(
                <section className='madlib_holder' >
                    <The_Form fill_choice={this.fill_choice}
                                make_story={this.make_story}/>
                </section>
            )}

        else if(this.state.show === 'after_select'){
            return(
                <section className='madlib_holder' >
                    <Story fill_choice={this.fill_choice}
                    landing={this.props.landing}
                    story_fact_array={this.state.story_fact_array}/>
                   
                </section>
)}
    ;}
}
    export default Madlib;

    // <button onClick= {e =>this.props.choice('main')}>Back
    
    
    
    
    
    //     if(this.state.mode === 'view') {
    //       return (
    //         <div>
    //           <p>Text: {this.state.text}</p>
    //           <button onClick={this.handleEdit}>
    //             Edit
    //           </button>
    //         </div>
    //       );
    //     } else {
    //       return (
    //         <div>
    //           <p>Text: {this.state.text}</p>
    //             <input
    //               onChange={this.handleChange}
    //               value={this.state.inputText}
    //             />
    //           <button onClick={this.handleSave}>
    //             Save
    //           </button>
    //         </div>
    //       );
    //     }
    //   }
    // }
    