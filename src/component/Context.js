import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';



const AppReducer = (state, action) => {
    switch (action.type){
        case 'Add_Expense':
            return{
                ...state,
                expenses: [...state.expenses, action.payload],
            };

        case 'Delete_Expense' :
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };

        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };

        default:
            return state;
    }

};
const InitialState=  {

    budget: 2000,
    expenses: [
        { id: uuidv4(), name:"Shopping", cost: 50 },
        { id: uuidv4(), name:"Transportation", cost: 100 },
        { id: uuidv4(), name:"Car Repairing", cost: 150 },

    ],
  
};

export const Context = createContext();

export const AppProvider  = (props) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    return(<Context.Provider 
        value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,

    }}>
        {props.children}
        </Context.Provider>
    );
};