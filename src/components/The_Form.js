import React from 'react';
import ReactDOM from 'react-dom';

class The_Form extends React.Component{
    constructor(props){
        super(props)
        
    }   
    
//    make_story=(event)=>{
       
//        let form_array = [];
//        let female = document.getElementById("female_name").value;
//        let male = document.getElementById("male_name").value;
//        let adjOne = document.getElementById("adjective_one").value;
//        let jobOne = document.getElementById("job_one").value;
//        let adjTwo = document.getElementById("adjective_two").value;
//        let jobTwo = document.getElementById("job_two").value;
//        let natEth = document.getElementById("nation").value;
//        let myth = document.getElementById("myth").value;
//        form_array.push(female, male, adjOne, jobOne, adjTwo,jobTwo, natEth, myth);
//         this.setState({'story_fact_array': form_array});
//         console.log(this.state.story_fact_array);
//         console.log(form_array);
//         this.props.fill_choice('after_select');
//     }

    render(){
    return(
<section className='madlib_holder' >

<form>
  <label>
    Woman's Name:
    <input type="text" name="womans_name" id='female_name' value="Jill"/>
  </label>
  <label>
  Man's Name:
  <input type="text" name="mans_name" id='male_name' value="Bob"/>
</label>
<label>
Adjective:
<input type="text" name="adj_one" id='adjective_one' value="Red"/>
</label>
<label>
Profession:
<input type="text" name="job_one" id='job_one' value="builder"/>
</label>
<label>
Adjective:
<input type="text" name="adj_two" id='adjective_two' value='blue'/>
</label>
<label>
Nationality/Ethnicity:
<input type="text" name="nationality" id='nation' value='Romanian'/>
</label>
<label>
Profession:
<input type="text" name="job_two" id='job_two' value="Tax preparer"/>
</label>
<label>
Mythical Creature:
<input type="text" name="myth" id='myth' value="Unicorn"/>
</label>
  <input type="button" value="Submit" onClick={this.props.make_story}/>
</form>
</section>
          
    );}
}
    export default The_Form;

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
    