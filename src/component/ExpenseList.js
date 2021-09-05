
import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { Context } from './Context'

const ExpenseList = () => {

    const {expenses} = useContext(Context);
    

    return(
        <ul className='list-group'>
            {expenses.map((expense)=>(

                <ExpenseItem id={expense.id} 
                name = {expense.name} 
                cost ={expense.cost} />

            ))}
        </ul>
        
    );
};

export default ExpenseList;
