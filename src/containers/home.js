import React, { Component } from 'react';
import Hero from '../components/hero';
import Cart from '../components/cart';
import store from '../store/store';
import { addItem, deleteItem } from '../store/actions';

class Home extends Component {
  constructor(props) {
    super(props);
    //the refs
    this.eventRef = React.createRef();
    // this.quantityRef = React.createRef();
    //do the binding
    this.handleAddToCart = this.handleAddToCart.bind(this);
    //define states
    this.state = {
      events: [
        { name: 'Kids Party', unitPrice: 220 },
        { name: 'Wine Tour', unitPrice: 440 },
        { name: 'Team Building', unitPrice: 800 },
        { name: 'Picnic', unitPrice: 220 },
      ],
      allowedQuantity: (() => { let qList = [],i = 1; while(i < 6) { qList.push(i); i++; } return qList; })(),
      cartItems: []
    };
  }
  handleAddToCart(e) {
    // e.preventDefault;
    //add the items
    let eventSelectionNode = document.querySelector('#homeFormEventType');
    let quantitySelectionNode = document.querySelector('#homeFormQuantity');
    let curCartItem = {
      name: eventSelectionNode.value,
      quantity: quantitySelectionNode.value,
      price: this.state.events.filter(i => i.name == eventSelectionNode.value)[0].unitPrice
    };
    // console.log(curCartItem);
    // this.setState({cartItems: [...this.state.cartItems, curCartItem]});
    store.dispatch(addItem(curCartItem));
    // console.log(store.getState());
  }
  render() {
    return (<div>
      <Hero page="Home">
        <div className="columns">
          <div className="column"></div>
          {/** center cotents*/}
          <div className="column is-two-thirds">
            <div className="container is-size-4">
              <h3>Please choose your fun activities</h3>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <label class="label">Event Category</label>
                <div class="select">
                  <select ref={this.eventRef} id="homeFormEventType">
                    <option>Select dropdown</option>
                    {this.state.events.map((i, idx) => {
                      return <option key={idx}>{ i.name }</option>
                    })}
                  </select>
                </div>
              </div>
              <div class="control">
                <label class="label">Quantity</label>
                <div class="control select">
                  <select ref={this.quantityRef} id="homeFormQuantity">
                    <option>Select</option>
                    {this.state.allowedQuantity.map((i, idx) => <option>{i}</option>)}
                  </select>
                </div>
                <button class="button is-link" onClick={this.handleAddToCart}>Add To Cart</button>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Pay</button>
              </div>
              <div class="control">
                <button class="button is-text">Cancel</button>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <Cart items={store.getState()} ></Cart>
          </div>
        </div>
      </Hero>
    </div >)
  }
}

export default Home;