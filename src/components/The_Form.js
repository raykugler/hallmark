import React from 'react';
import ReactDOM from 'react-dom';

class The_Form extends React.Component{
    constructor(props){
        super(props)
        
    }   



    render(){
    return(

<form className='form'>
    <label className='inputs'>
    <p className='input_title'>Woman's Name:</p>
    <input type="text" name="womans_name" id='female_name' className='field' />
    <img src='/images/again.png' className='autofill_image' onClick={e => this.props.fill_for_me('female_name')}/>
    </label>

    <label className='inputs'>
    <p className='input_title'>Man's Name:</p>
    <input type="text" name="mans_name" id='male_name' className='field' />
    <img src='/images/again.png' className='autofill_image' onClick={e => this.props.fill_for_me('male_name')}/>
    </label>

    <label className='inputs'>
        <p className='input_title'>Adjective:</p>
        <input type="text" name="adj_one" id='adjective_one' className='field' />
        <img src='/images/again.png' className='autofill_image' onClick={e => this.props.fill_for_me('adjective_one')}/>
    </label>

    <label className='inputs'>
        <p className='input_title'>Profession:</p>
        <input type="text" name="job_one" id='job_one' className='field'/>
        <img src='/images/again.png' className='autofill_image' onClick={e => this.props.fill_for_me('job_one')}/>
    </label>

    <label className='inputs'>
        <p className='input_title'>Adjective:</p>
        <input type="text" name="adj_two" id='adjective_two' className='field'/>
        <img src='/images/again.png' className='autofill_image' onClick={e => this.props.fill_for_me('adjective_two')}/>
    </label>
    <label className='inputs'>
        <p className='input_title'>Nationality/Ethnicity:</p>
        <input type="text" name="nationality" id='nation' className='field'/>
        <img src='/images/again.png' className='autofill_image' onClick={e => this.props.fill_for_me('nation')}/>
    </label>
    <label className='inputs'>
        <p className='input_title'>Profession:</p>
        <input type="text" name="job_two" id='job_two' className='field'/>
        <img src='/images/again.png' className='autofill_image' onClick={e => this.props.fill_for_me('job_two')}/>
    </label>
    <label className='inputs'>
        <p className='input_title'>Mythical Creature:</p>
        <input type="text" name="myth" id='myth' className='field'/>
        <img src='/images/again.png' className='autofill_image' onClick={e => this.props.fill_for_me('myth')}/>
    </label>
  <input type="button" value="Generate Plot" className='submit_button' onClick={this.props.make_story}/>
  <button onClick= {e =>this.props.choice('main')} className='form_back_button'><img src='/images/book_two.png' className='form_again_image' />Home</button>
  </form>

          
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
    