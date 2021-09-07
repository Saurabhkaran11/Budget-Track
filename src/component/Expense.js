
import React, { useContext } from 'react';
import { Context } from './Context';


const Expense = () => {

    const { expenses } = useContext(Context);

    const totalExpenses = expenses.reduce((total, item) =>{

        return(total += item.cost);

    }, 0);


    return(
        <div className='alert alert-primary'>
            <span>Amount Spent: ${totalExpenses}</span>
        </div>
    );
};

export default Expense;
