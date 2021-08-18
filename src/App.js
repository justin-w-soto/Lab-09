import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import List from './components/List.js';
import Create from './components/Create.js';
import Header from './components/Header.js';
import Details from './components/Details.js';


class  FullStack extends Component {
  
    render() { 

        return ( 
            <>
            <h1>My Friends</h1>
       
            <BrowserRouter>

                <Header />
                   
                    <Switch>

                        <Route exact path="/" component={List} />

                        <Route path="/friends/:id" component={Details} />

                        <Route path="/create" component={Create} />


                    </Switch>

                </BrowserRouter>
            </>
         );
    }
}
 
export default FullStack;