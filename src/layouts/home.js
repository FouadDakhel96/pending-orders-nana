import React, {Component} from 'react';
import Sidebar from '../components/sidebar';
import Body from '../components/body';

class Home extends Component {



  render() {
    return (<div>

      <Sidebar/>
      <div className="content">
        <h1>Pending Orders
        </h1>
        <hr></hr>
        <Body/>

      </div>



    </div>);
  }

}

export default Home;
