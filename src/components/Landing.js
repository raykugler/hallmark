import React from 'react';
import ReactDOM from 'react-dom';
import Choice from './Choice';
import Madlib from './Madlib';
import Auto from './Auto';

class Landing extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            landing: 'main'
  }
    }
    choice=(e)=>{
       
        var the_choice = e;
        this.setState({
            landing: the_choice
          });
       
       
    }


   
    render(){
        // const choice = this.state.landing;

        // if(choice === 'main'){
        //     return (<Choice />);
        // }
        // else if(choice === 'madlib'){
        //     return (<Madlib />);
        // }
        // else if(choice === 'auto'){
        //     return  (<Auto />);
        if(this.state.landing === 'main'){
        return(
        <Choice choice = {this.choice}/>

        )}
    else if (this.state.landing === 'madlib'){
        return(
            <Madlib choice = {this.choice}
            landing={this.state.landing}
            />
        )
    }
    else if (this.state.landing === 'auto'){
        return(
            <Auto choice = {this.choice}
            landing={this.state.landing}
            />
        )
    }
    
    }

    
        
    ;}

    export default Landing;