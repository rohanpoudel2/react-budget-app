import { useContext } from "react"
import { AppContex } from "../context/AppContext";

const Remaining = () => {

  const { expenses, budget } = useContext(AppContex);

  const totalcost = expenses.reduce((total, data) => { return (total += data.cost) }, 0);

  const alerttype = totalcost > budget ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alerttype}`}>
      <span>Remaining: ${budget - totalcost}</span>
    </div>
  )
}

export default Remaining