import Expenseslist from "./Expenseslist"

import { nanoid } from 'nanoid';
import { useContext } from "react";
import { AppContex } from "../context/AppContext";

const Expenses = ({ search }) => {

  const { expenses } = useContext(AppContex);

  return (
    <ul className="list-group">
      {expenses.map((data) =>
        <Expenseslist key={nanoid()} id={data.id} name={data.name} cost={data.cost} search={search} />
      )}
    </ul>
  )
}

export default Expenses