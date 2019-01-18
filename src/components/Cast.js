import React from 'react';
import ReactDOM from 'react-dom';
const actress_image_array = ['jessica-lowndes', 'elaine-hendricks', 'danielle-panabaker', 'lucia-walters', 'shannon-chan-kent', 'taylor-hastings', 'jessy-schram'];
const actor_image_array = ['michael-rady', 'matt-long', 'michael-brian', 'chad-michael-murray', 'cardi-wong', 'mat-lo'];
const angel_image_array = ['steve-larkin', 'beverley-elliot', 'gabrielle-rose', 'bj-harrison'];

class Cast extends React.Component{
    constructor(props){
        super(props)
        this.state = { data: [],  
                 actress_image: '' ,
                 actress_name: '' ,
                 actor_image: '', 
                 actor_name: '' ,
                 angel_image:'',
                 angel_name:'',
                
        };
    }   
componentDidMount(){
    this.fill_call();
}
async fill_call()  {
    let actress_select = Math.floor(Math.random() * 5);
    let actress = actress_image_array[actress_select];
    let actor_select = Math.floor(Math.random() * 6);
    let actor = actor_image_array[actor_select];
    let angel_select = Math.floor(Math.random() * 4);
    let angel = angel_image_array[angel_select];
    const URL = `http://api.tvmaze.com/search/people?q=${actress}`;
    
    const fetchActressResult = fetch(URL);
    const actressResponse = await fetchActressResult;
    const actressjsonData = await actressResponse.json();

    this.setState({ actress_image: actressjsonData[0].person.image.medium  });
    this.setState({ actress_name: actressjsonData[0].person.name  });
    const URL_two = `http://api.tvmaze.com/search/people?q=${actor}`;

    const fetchActorResult = await fetch(URL_two);
    const actorResponse = await fetchActorResult;
    const actorjsonData = await actorResponse.json();
    console.log(actorjsonData);
    this.setState({ actor_image: actorjsonData[0].person.image.medium  });
    this.setState({ actor_name: actorjsonData[0].person.name });

    const URL_three = `http://api.tvmaze.com/search/people?q=${angel}`;

    const fetchAngelResult = await fetch(URL_three);
    const angelResponse = await fetchAngelResult;
    const angeljsonData = await angelResponse.json();
    console.log(actor);
    this.setState({ angel_image: angeljsonData[0].person.image.medium  });
    this.setState({ angel_name: angeljsonData[0].person.name});
       console.log(this.props.names);
    
}

    render(){
    return(
        <section className='actor_holder'>        
        <img src={this.state.actress_image} className='actress_image image'/>
        <p className='actress_name'>{this.state.actress_name} <br/> as <br/> {this.props.names[0]}  </p>
        

        <img src={this.state.actor_image} className='actor_image image'/>
        <p className='actor_name'>{this.state.actor_name}<br/> as <br/> {this.props.names[1]}</p>
        <img src={this.state.angel_image} className='angel_image image'/>
        <p className='angel_name'>{this.state.angel_name} <br/> as <br/> {this.props.names[2]}</p>
        </section>

         

          
    );}
}
    export default Cast;

    // <button onClick={e => this.fill_call()} className='fill_button'>Fill Call</button>