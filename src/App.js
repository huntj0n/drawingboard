import React from 'react';
import routes from './routes';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.scss';

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default connect(null)(withRouter(App));
