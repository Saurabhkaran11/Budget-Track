
import React, { useContext } from 'react';
import { Context } from './Context';

const Remaining = () => {

    const { expenses, budget } = useContext(Context);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return(
        <div className={`alert ${alertType}`}>
            <span>Amount Remaining: ${budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;