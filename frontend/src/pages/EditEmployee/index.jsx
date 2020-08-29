import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../../redux/actions';
import { useParams, useHistory } from 'react-router-dom';

const initialStateEmployee = {
  name: "",
  cpf: "",
  salary: "",
  discount: "",
  dependents: "",
}

const EditEmployee = () => {
  const { id } = useParams();
  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();
  const history = useHistory();
  const [employeeForm, setEmployeeForm] = useState(initialStateEmployee);

  useEffect(() => {
    function getEmployeeToEdit() {
      setEmployeeForm(employees.find(employee => employee.id == id));
    }

    getEmployeeToEdit();
  }, []);

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(updateEmployee(employeeForm));
    setEmployeeForm(initialStateEmployee);
    history.push('/');
  }

  const handleInputChange = event => {
    setEmployeeForm({
      ...employeeForm,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label
          htmlFor="name"
        >
          Nome
        </label>
        <input
          value={employeeForm.name}
          type="text"
          onChange={handleInputChange}
          id="name"
          name="name"
        />

        <label
          htmlFor="cpf"
        >
          CPF
        </label>
        <input
          value={employeeForm.cpf}
          type="text"
          onChange={handleInputChange}
          id="cpf"
          name="cpf"
        />

        <label
          htmlFor="salary"
        >
          Salário bruto
        </label>
        <input
          value={employeeForm.salary}
          type="text"
          onChange={handleInputChange}
          id="salary"
          name="salary"
        />

        <label
          htmlFor="discount"
        >
          Desconto na previdência
        </label>
        <input
          value={employeeForm.discount}
          type="text"
          onChange={handleInputChange}
          id="discount"
          name="discount"
        />

        <label
          htmlFor="dependents"
        >
          Número de dependentes
        </label>
        <input
          value={employeeForm.dependents}
          type="text"
          onChange={handleInputChange}
          id="dependents"
          name="dependents"
        />

        <button>Editar</button>

      </form>
    </div>
  )
}

export default EditEmployee;