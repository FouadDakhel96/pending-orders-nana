import React, {
  Component
} from 'react';

class Sidebar extends Component {

  render() {
    return (

      <div className="sidebar">
        <img src="/images/nana.png" height="100" width="100"></img>
        <h4 className="test ">Nana Direct</h4>
        <br></br>
        <ul class="w3-ul w3-card">
          <li>
            Pending Orders

          </li>
          <li>History</li>
          <li>User Info</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;
