import React, { createContext, useReducer } from 'react';

const initialState = {
  budgets: [],
};

export const BudgetContext = createContext();

const budgetReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BUDGET':
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
      };
    default:
      return state;
  }
};

export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const addBudget = (budget) => {
    dispatch({ type: 'ADD_BUDGET', payload: budget });
  };

  return (
    <BudgetContext.Provider value={{ budgets: state.budgets, addBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};
