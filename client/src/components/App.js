import 'materialize-css/dist/css/materialize.min.css'
import React, { useEffect } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'

const App = (props) => {

  useEffect(() => {
    props.fetchUser()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default connect(null, actions)(App);
