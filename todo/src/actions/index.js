export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const STRIKE_THROUGH = "STRIKE_THROUGH";


const addItem = (item) => {
    return ({ type: ADD_ITEM, payload: item });
}
const deleteItem = (item) => {
    return ({ type: DELETE_ITEM });
}
const toggleStrike = (toggle) => {
    return ({ type: STRIKE_THROUGH, payload: toggle });
}

export default {
    addItem, deleteItem, toggleStrike
}