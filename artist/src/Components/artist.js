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
        this.setState({artist:response.data}))
      .catch(err => console.log(err))

     }

    
    render(){
        console.log(this.state.artist)

       let {artist} = this.state

        return(
            <>
             <div className="artist_bio">
               <div className="avatar">
                   <span style={{
                    background:`url('/images/covers/${this.state.artist.cover}.jpg')no-repeat`
                   }
                   }>

                   </span>
               </div>
               <div className="bio">
                 <h3>{artist.name}</h3>
                 <div className="bio_text">
                   {artist.bio}
                 </div>
               </div>
               <Album/>
             </div>

            </>
        )
    }
     
}


export default Artist