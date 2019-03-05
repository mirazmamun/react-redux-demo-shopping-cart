import actions from './actions';
let initialState = [];
let currentIdx = 0;
export default (state = null, action) => {
    state = state || initialState;
    switch (action.type) {
      case actions.ADD_ITEM:
        let updatedState = [...state, { name: action.name, quantity: action.quantity, idx: currentIdx }];
        ++currentIdx;
        return updatedState;
      case actions.DELETE_ITEM:
        return state.filter(i => { return action.idx !== i.idx; })
      default:
        return state
    }
  }