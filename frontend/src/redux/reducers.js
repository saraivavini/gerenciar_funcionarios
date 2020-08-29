import { combineReducers } from 'redux';
import {
  ADD_EMPLOYEE,
  REMOVE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from './actions';


const initialState = [
  {
    id: 0,
    name: "Letícia Aurora Farias",
    cpf: "936.938.039-60",
    salary: 998,
    discount: 74.85,
    dependents: 2
  },
  {
    id: 1,
    name: "Edson Thiago Drumond",
    cpf: "748.517.476-24",
    salary: 1045,
    discount: 78.38,
    dependents: 1
  },
  {
    id: 2,
    name: "Fátima Elza Tereza Castro",
    cpf: "701.118.872-08",
    salary: 5500,
    discount: 628.95,
    dependents: 0
  },
  {
    id: 3,
    name: "Sandra Giovanna Drumond",
    cpf: "715.890.756-25",
    salary: 4522,
    discount: 492.03,
    dependents: 3
  },
  {
    id: 4,
    name: "Valentina Clara Nunes",
    cpf: "101.151.404-41",
    salary: 10000,
    discount: 713.1,
    dependents: 4
  }
];

const employees = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return [
        ...state,
        {
          id: state.length,
          ...action.employee
        }
      ]
    case UPDATE_EMPLOYEE:
      return [
        ...state.filter(employee => (
          employee.id !== action.employee.id
        )),
        action.employee
      ]
    case REMOVE_EMPLOYEE:
      return [
        ...state.filter(employee => (
          employee.id != action.employee.id
        ))
      ]
    default:
      return state;
  }
}


const employeesReducers = combineReducers({
  employees
})

export default employeesReducers;