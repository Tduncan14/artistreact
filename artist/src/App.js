import React,{Component}  from 'react';
import Artist from './Components/Artist';
import axios from 'axios';
import Header from './Components/Header'
import Banner from './Components/Banner';
import ArtistList from './Components/ArtistList'


class Home extends Component {
 
  constructor(props){
    super(props)

    this.state ={
      artists:'',
      isLoading:true
    }
  }


 componentDidMount(){

  axios.get('http://localhost:3004/artists')
  .then(res => this.setState({artists:res.data,
                              isLoading:false }))
  .catch(err => console.log(err))

  
 }


 render(){
  console.log(this.state.artists,'data')


  return(
     <>
     
       <Banner />
       <ArtistList artists={this.state.artists}/>
     

     </>
  )





 }






}

export default Home;
