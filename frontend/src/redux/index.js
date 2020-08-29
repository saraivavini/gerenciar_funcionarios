import { createStore } from 'redux';
import employeesReducers from './reducers';
const store = createStore(employeesReducers);

export default store;