import { useContext, useState } from "react";
import { AppContex } from "../context/AppContext";
import { nanoid } from 'nanoid';


const Addexpenses = () => {

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const { dispatch } = useContext(AppContex);

  const handlesubmit = (e) => {
    e.preventDefault();

    const expenses = {
      id: nanoid(),
      name: name,
      cost: parseInt(cost)
    }

    dispatch(
      {
        type: 'Add',
        payload: expenses
      }
    );

  }

  return (
    <form onSubmit={handlesubmit}>
      <div className="row">
        <div className="col-sm mb-3">
          <input type="text" name="Name" placeholder="Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col-sm mb-3">
          <input type="text" name="Cost" placeholder="Cost" className="form-control" value={cost} onChange={(e) => setCost(e.target.value)} />
        </div>
        <div className="col-sm">
          <button className="btn btn-primary form-control" type="submit">Add</button>
        </div>
      </div>
    </form>
  )
}

export default Addexpenses