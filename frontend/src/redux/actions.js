export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";

export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    employee
  }
}

export const removeEmployee = (employee) => {
  return {
    type: REMOVE_EMPLOYEE,
    employee
  }
}

export const updateEmployee = employee => {
  return {
    type: UPDATE_EMPLOYEE,
    employee
  }
}