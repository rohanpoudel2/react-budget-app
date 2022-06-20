import { useContext } from "react"
import { AppContex } from "../context/AppContext"


const Spent = () => {
  const { budget, expenses } = useContext(AppContex);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-primary';

  return (
    <div className={`alert ${alertType}`}>
      <span>Spent to Far: ${totalExpenses}</span>
    </div>
  )
}

export default Spent