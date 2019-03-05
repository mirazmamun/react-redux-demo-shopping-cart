const actionTypes = {
    ADD_ITEM: 'ADD_ITEM',
    DELETE_ITEM: 'DELETE_ITEM'
}
export default actionTypes;
export function addItem ({name, quantity}) {
    return { type:  actionTypes.ADD_ITEM, name, quantity};
}
export function deleteItem (idx) {
    return { type:  actionTypes.DELETE_ITEM, idx};
}