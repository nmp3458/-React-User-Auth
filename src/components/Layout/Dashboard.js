import React, { Component } from 'react';

import { Header, Footer, Main } from './index';

class Dashboard extends Component {
  /*********************Render Mrthod*********************/
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
  /*********************Render Mrthod*********************/
}
export default Dashboard;
