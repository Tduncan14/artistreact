import React, {Component} from 'react'
import { BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import Home from './App';
import Artist from './Components/artist'
class Routes extends Component{






    render(){


      return(

        <Router>
            <Switch>
           <Route exact path = "/" component={Home}/>
           <Route exact path = "/artist" component={Artist}/>
      </Switch>
         </Router>
      )
    }
}


export default Routes