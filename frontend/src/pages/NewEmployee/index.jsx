import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/actions';
import { useHistory } from 'react-router-dom';

const initialStateEmployee = {
  name: "",
  cpf: "",
  salary: "",
  discount: "",
  dependents: "",
}

const NewEmployee = () => {
  const dispatch = useDispatch();
  const [employeeForm, setEmployeeForm] = useState(initialStateEmployee);
  const history = useHistory();

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(addEmployee(employeeForm));
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

        <button>Adicionar</button>

      </form>
    </div>
  )
}

export default NewEmployee;