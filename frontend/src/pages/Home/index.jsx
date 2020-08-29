import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeEmployee } from '../../redux/actions';
import { useHistory } from 'react-router-dom';


const Home = () => {
  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();
  const history = useHistory();

  const calculateBaseSalaryIr = ({ salary, discount, dependents }) => {
    const dependentDeduction = 164.56;
    return salary - discount - dependentDeduction * dependents;
  };

  const calculateDiscountIRRF = ({ salary, discount, dependents }) => {
    const baseSalary = calculateBaseSalaryIr({ salary, discount, dependents });
    const salaryLimits = [
      1903.98,
      2826.65,
      3751.05,
      4664.68
    ];

    const aliquots = [
      0.075,
      0.15,
      0.225,
      0.275
    ];

    const deductedAmounts = [
      142.8,
      354.8,
      636.13,
      869.36
    ]

    if (baseSalary <= salaryLimits[0]) {
      return baseSalary;
    }

    else if (baseSalary > salaryLimits[0] && baseSalary <= salaryLimits[1]) {
      return baseSalary * aliquots[0] - deductedAmounts[0];
    }

    else if (baseSalary > salaryLimits[1] && baseSalary <= salaryLimits[2]) {
      return baseSalary * aliquots[1] - deductedAmounts[1];
    }

    else if (baseSalary > salaryLimits[2] && baseSalary <= salaryLimits[3]) {
      return baseSalary * aliquots[2] - deductedAmounts[2];
    }

    else if (baseSalary > salaryLimits[3]) {
      return baseSalary * aliquots[3] - deductedAmounts[3];
    }

  };


  const handleEditEmployee = id => {
    history.push(`/employees/edit/${id}`);
  };

  const handleRemoveEmployee = employee => {
    dispatch(removeEmployee(employee));
  }


  return (
    <div id="main">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Salário</th>
            <th>Desconto IR</th>
            <th>Dependentes</th>
            <th>Salário base</th>
            <th>Desconto IRRF</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td> {employee.name} </td>
              <td> {employee.cpf} </td>
              <td> R$ {employee.salary} </td>
              <td> R$ {employee.discount} </td>
              <td> {employee.dependents} </td>
              <td> R$
            {
              calculateBaseSalaryIr({
                salary: employee.salary,
                discount: employee.discount,
                dependents: employee.dependents
              }).toFixed(2)
                }
              </td>
              <td> R$ 
              {
                  calculateDiscountIRRF({
                    salary: employee.salary,
                    discount: employee.discount,
                    dependents: employee.dependents
                  }).toFixed(2)
                }
              </td>
              <td>
                <button onClick={() => handleEditEmployee(employee.id)}>Editar</button>
                <button onClick={() => handleRemoveEmployee(employee)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home;