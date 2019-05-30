import React, {Component} from 'react';
import axios from 'axios';

class Body extends Component {

  constructor(props){
    super(props);
    this.state ={
      order:[],
    }
  }
  getOrders = () => {
    axios.get('http://localhost:4000/orders').then((res) => {
      this.setState({
        order: res.data
      })
      console.log(this.state.order);
    }).catch(function(error) {
      console.log(error);
    });
  }

  cancelOrdes = (id) => {
    axios.post('http://localhost:4000/cancel', {order_id:id}).then((res) =>{
      console.log('Canceled');
      this.getOrders();
    }).catch(function(error){
      console.log(error);
    })

  }

  componentDidMount = () =>{
    this.getOrders();
  }

  render() {
    return (<div className="bodyy">
      <div>
        <div className="form-group">
          <select name="slct" id="slct" className="form-control">
            <option selected="selected" disabled="disabled">- Select a Store -</option>
            <option value="STR00000604">Tania</option>
            <option value="STR00000642">Haseel</option>
            <option value="STR00000476">Raseed</option>
            <option value="STR00000649">Fish Day</option>
            <option value="STR00000661">Vitamin</option>
          </select>
          <hr></hr>
        </div>
      </div>
      <br></br>
      <table>
        <tr>
          <th>Order ID</th>
          <th>Store ID</th>
          <th>Order Status</th>
          <th>Delivery time</th>
          <th>Price</th>
          <th>Action</th>

        </tr>


        {
          this.state.order.map(item => {
            return (
              <tr>
                <td>{item.order_id}</td>
                <td>{item.store_id}</td>
                <td>{item.order_status}</td>
                <td>{item.delivery_time}</td>
                <td>{item.price}</td>
                <td class="table-last-item">

                  <button type="button" class="btn btn-success" > Make it Delivered</button>
                  <button type="button" class="btn btn-danger" onClick={()=> this.cancelOrdes(item.order_id)} >Cancel</button>
                </td>
              </tr>
            )
          })
        }

      </table>


    </div>)
  }
}

export default Body;
