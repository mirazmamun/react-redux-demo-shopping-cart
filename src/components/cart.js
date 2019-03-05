import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../store/store';
import { addItem, deleteItem } from '../store/actions';
class Cart extends Component {
    constructor(props) {
        super(props);
    }
    handleDeleteClick(idx, e) {     
        e.preventDefault();
        // let cartTable = document.querySelector('#cartTable');
        // let dataKey = '[data-key="' + idx + '"]';
        // let trToRemove = document.querySelectorAll(dataKey)[0];
        // trToRemove.parentNode.removeChild(trToRemove);
        // //remove the item from the state
        // let curState = Object.assign({}, this.state);
        // delete curState[idx];
        // this.setState({ items:  curState});
        store.dispatch(deleteItem(idx));
    }
    render() {
        return (
            <React.Fragment>
                <h3 class="is-size-4">Your cart</h3>
                {(this.props.items.length == 0) ?
                    (<span>Currently Empty</span>) :
                    (<table className="table table-striped table-fullwidht" id="cartTable">
                        <tbody>
                        {this.props.items.map((i, idx) => {
                            return (
                                <tr key={idx} data-key={i.idx}>
                                    <td><span>{i.quantity}</span></td>
                                    <td><span>{i.name}</span></td>
                                    <td>{i.total}</td>
                                    <td>
                                        <a class="button is-small is-danger is-outlined" onClick={(e) => { this.handleDeleteClick.call(this, i.idx, e); }}>
                                            <span>Delete</span>
                                            <span class="icon is-small">
                                                <i class="fas fa-times"></i>
                                            </span>
                                        </a>
                                    </td>
                                </tr>)
                        })}
                        </tbody>
                    </table>
                    )}
            </React.Fragment>
        );
    }
}
Cart.PropTypes = {
    items: PropTypes.array
}
export default Cart;