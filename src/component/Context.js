import React, { createContext, useReducer } from 'react';



const AppReducer = (state, action) => {
    switch (action.type){

        default:
            return state;
    }

};
const InitialState=  {

    budget: 1000,
    expenses: [
        { id: 101, name:"Shopping",  cost: 50 },
        { id: 102, name:"Transportation",  cost: 100 },

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