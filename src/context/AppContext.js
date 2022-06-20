import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {

    case 'Add': {
      return (
        {
          budget: state.budget,
          expenses: [...state.expenses, action.payload]
        }
      );
    }

    case 'Delete': {
      return (
        {
          budget: state.budget,
          expenses: state.expenses.filter((data) => data.id != action.payload)
        }
      )
    }

    case 'CHANGE_BUDGET': {
      return {
        budget: action.payload,
        expenses: state.expenses
      }
    }

    default: {
      return state;
    }
  }
}

const initialState =
{
  budget: 2000,
  expenses: []
};

export const AppContex = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContex.Provider value={
      {
        budget: state.budget,
        expenses: state.expenses,
        dispatch
      }
    }>
      {props.children}
    </AppContex.Provider>
  )
}