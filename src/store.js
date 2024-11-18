import { createStore } from 'redux';
import covidReducer from './reducer';

const store = createStore(covidReducer);

export default store;