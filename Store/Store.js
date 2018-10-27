import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"

/////////////// TẠO ACTION ///////////////////////////////////////////////
export const storeCarouselHome = ( data ) => ( {
    type: "STORE_CAROUSEL_HOME",
    data
});

export const storeListImageHome = ( data ) => ( {
    type: "STORE_LIST_IMAGE_UPDATE_HOME",
    data
});

/////////////////////////// REDUCER ////////////////////////////////////////
const carouselHomeReducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_CAROUSEL_HOME":
            return action.data;
        default: return state;
    }
}

const listImageHomeReducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_LIST_IMAGE_UPDATE_HOME":
            return action.data;
        default: return state;
    }
}

const reducer = combineReducers({
    carousel_Home: carouselHomeReducer,
    listImage_Home: listImageHomeReducer
})

////////////////////////////////////////////////////////////////////////////////////////

export default ( initialState ) =>
createStore( reducer, initialState, applyMiddleware( thunkMiddleware ) )