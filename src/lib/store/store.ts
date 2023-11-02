import {combineReducers, configureStore} from "@reduxjs/toolkit";
import servicesListReducer from './slices/services-list.slice';

const reducer = combineReducers({
    servicesList: servicesListReducer,
})

const store = configureStore({
    reducer,
})

export default store;