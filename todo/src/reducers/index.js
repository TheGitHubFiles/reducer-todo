import { ADD_ITEM } from '../actions';
import { DELETE_ITEM } from '../actions';
import { STRIKE_THROUGH } from '../actions';
import { DATE } from '../actions';


const reducer = (state, action) => {
    switch (action.type) {
        case (ADD_ITEM):
            return state.concat(action.payload);
        case (DELETE_ITEM):
            return state.filter((item) => !item.complete);
        case (STRIKE_THROUGH):
            return (state.map((item) => {
                if (item.id === action.payload) {
                    return ({ ...item, complete: !item.complete })
                }
                return item
            }));

    }
}

export default reducer;