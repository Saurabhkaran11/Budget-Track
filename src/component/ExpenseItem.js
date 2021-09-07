import React, { useContext } from 'react';
import { TiDelete } from "react-icons/ti";
import { Context } from './Context';


const ExpenseItem = (props) => {

    const { dispatch }  = useContext(Context);

    const handleDeleteExpense = () => {

        dispatch({
            type: 'Delete_Expense',
            payload: props.id,
        });

    };




    return(
        <li className = 'list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className ="badge badge-pill bg-primary text-light">
                   
                    ${props.cost}
                    
                </span>
                <TiDelete size ='1.5em' onClick = {handleDeleteExpense}></TiDelete>
                {/* ${props.cost} */}
                
            </div>
        </li>


    );
};

export default ExpenseItem;