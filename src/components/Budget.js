import { useContext, useState } from "react"
import { AppContex } from "../context/AppContext"

import './budget.css';


const Budget = () => {
  const { budget, dispatch } = useContext(AppContex);

  const [newbudget, setnewbudget] = useState(budget);

  const budgetchange = () => {
    dispatch({
      type: 'CHANGE_BUDGET',
      payload: newbudget
    })
  }

  const changebtn = (e) => {
    document.getElementById('budget-wrapper').classList.add('show-save');
    if (e.target.id == 'save') {
      budgetchange();
      document.getElementById('budget-wrapper').classList.remove('show-save');
    }
  }

  const setnew = (e) => {
    setnewbudget(e.target.value);
  }

  return (
    <div id="budget-wrapper">
      <div className="alert alert-secondary d-flex justify-content-between align-item-center">
        <span className="d-flex align-items-center">Budget: ${budget}</span>
        <input type="number" value={newbudget} onChange={setnew} className='form-control' />
        <button id="edit" className="btn btn-primary ms-2" onClick={changebtn}>Edit</button>
        <button id="save" className="btn btn-primary ms-2" onClick={changebtn}>Save</button>
      </div>
    </div>
  )
}

export default Budget