import React,{Component} from 'react';
import axios from 'axios';


const url = 'http://localhost:3004/artists/';

class Artist extends Component {
    
    constructor(props){
      super(props)

      this.state={
          artist:''
      }
    }

     componentDidMount(){

      axios.get(`${url}/${this.props.match.params.id}`)
      .then(response =>
        console.log(response.data))
      .catch(err => console.log(err))

     }

    
    render(){
        console.log(this.state.artist)



        return(
            <div>
                hello
            </div>
        )
    }
     
}


export default Artist