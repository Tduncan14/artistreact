import React, {Component} from 'react'
import { BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import Home from './App';
import Artist from './Components/Artist'
import Header from './Components/Header';
class Routes extends Component{






    render(){


      return(
        <>
        
        <Router>
        <Header />  
            <Switch>
           <Route exact path = "/" component={Home}/>
           <Route exact path = "/artist/:id" component={Artist}/>
      </Switch>
         </Router>

      </>
      )
    }
}


export default Routes