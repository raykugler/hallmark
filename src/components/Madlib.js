import React from 'react';
import ReactDOM from 'react-dom';

class Madlib extends React.Component{
    constructor(props){
        super(props)
        this.state = {
               name: ''
              }
    }   
    
   test=(event)=>{
       console.log(this.state.name);
       this.setState({name: event.target.name});
   }

    render(){
    return(
<section className='madlib_holder' >
<button onClick= {e =>this.props.choice('main')}>Back
</button>
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="button" value="Submit" onClick={this.test}/>
</form>
</section>
          
    );}
}
    export default Madlib;


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
    