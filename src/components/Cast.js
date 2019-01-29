import React from 'react';
import ReactDOM from 'react-dom';
const actress_image_array = ['jessica-lowndes', 'elaine-hendricks', 'danielle-panabaker', 'lucia-walters', 'shannon-chan-kent', 'taylor-hastings','taylor-cole', 
                            'jessy-schram','katrina-bowden', 'rachael-leigh-cook','kristy-swanson','lacey-chabert','danica-mckellar',
                            'josie-bissett','ali-liebert','cindy-busby', 'amanda-schull','vanessa-bell-calloway', 'julie-gonzalo','bethany-joy-lenz','brittany-bristow',
                            'poppy-drayton','minka-kelly','megan-park', 'makenzie-vega','fiona-gubelmann','cindy-busby','pascale-hutton','josie-bissett','jen-lilley',
                            'catherine-bell','alexa-penavega','jill-wagner', 'autumn-reeser', 'debbie-gibson','nikki-deloach','lindy-booth', 'kelly-rutherford','leann-rimes', 
                            ' kellie-pickler','merritt-patterson'
                            ];
const actor_image_array = ['michael-rady', 'matt-long', 'michael-brian', 'chad-michael-murray', 'cardi-wong', 'mat-lo','niall-matter','dean-cain','andrew-w-walker',
                        'cameron-mathison','damon-runyan','brett-dalton','jack-wagner', 'andrew-cooper','peter-porte','chris-mcnally', 'will-kemp', 'steven-r-mcqueen',
                        'jonathan-keltz', 'torrance-coombs','ryan-paevey','kavan-smith', 'marcus-rosner','jon-cor', 'carlos-penavega','kristoffer-polaha', 'marc-blucas', 
                         'robert-gant', 'dylan-neal','brennan-elliott','tyler-hynes','wes-brown','cameron-mathison', 'james-denton','bailee-madison', 'daniel-lissing'
                        ];
const angel_image_array = ['steve-larkin',  'bj-harrison','kix-brooks','james-brolin','andie-macdowell','venus-terzo', 'gail-ogrady', 'samantha-bond', 'bruce-davison', 'lini-evans', 'peri-gilpin', 'gary-perterman', 'richard-riehle', 
'barbara-niven', 'dolores-drake', 'timothy-webber', 'sean-campbell','malcolm-stewart', 'teryl-rothery', 'tosca-baggoo', 'patrick-duffy'];
const test_array = [];
// 'thomas-beaudoin','becca-tobin''jack-turner',
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
    let actress_select = Math.floor(Math.random() * 41);
    let actress = actress_image_array[actress_select];
    let actor_select = Math.floor(Math.random() * 36);
    let actor = actor_image_array[actor_select];
    let angel_select = Math.floor(Math.random() * 21);
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
    
    this.setState({ actor_image: actorjsonData[0].person.image.medium  });
    this.setState({ actor_name: actorjsonData[0].person.name });

    const URL_three = `http://api.tvmaze.com/search/people?q=${angel}`;

    const fetchAngelResult = await fetch(URL_three);
    const angelResponse = await fetchAngelResult;
    const angeljsonData = await angelResponse.json();
    
    this.setState({ angel_image: angeljsonData[0].person.image.medium  });
    this.setState({ angel_name: angeljsonData[0].person.name});
       
    
}
async image_test(){
    let display = document.getElementById('display');
     for (let i = 0; i< test_array.length; i++){
        let this_image = test_array[i];
        const URL_three = `http://api.tvmaze.com/search/people?q=${this_image}`;
        let image_frame = document.createElement('IMG');
        let text_frame = document.createElement('P');
        

    const fetchAngelResult = await fetch(URL_three);
    const angelResponse = await fetchAngelResult;
    const testjsonData = await angelResponse.json();
    image_frame.src = testjsonData[0].person.image.medium
    // let text_node = document.createElement( testjsonData[0].person.name);
    // text_frame.appendChild(text_node);
    // display.appendChild(text_frame);
    display.appendChild(image_frame);
  }
}

    render(){
    return(
        <section className='actor_holder' id='display'>
        <section className='actress_holder holder'>        
        <img src={this.state.actress_image} className='actress_image image'/>
        <p className='actress_name cast'>{this.state.actress_name} <br/> as <br/> {this.props.names[0]}  </p>
        </section>
        <section className='actor_man_holder holder'> 
        <img src={this.state.actor_image} className='actor_image image'/>
        <p className='actor_name cast'>{this.state.actor_name}<br/> as <br/> {this.props.names[1]}</p>
        </section>
        <section className='angel_holder holder'> 
        <img src={this.state.angel_image} className='angel_image image'/>
        <p className='angel_name cast'>{this.state.angel_name} <br/> as <br/> {this.props.names[2]}</p>
        </section>
        </section>

         

          
    );}
}
    export default Cast;

    // <button onClick={e => this.fill_call()} className='fill_button'>Fill Call</button>
   