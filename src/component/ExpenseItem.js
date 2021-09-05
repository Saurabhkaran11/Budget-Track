import React from 'react';
import { TiDelete } from "react-icons/ti";



const ExpenseItem = (props) => {
    return(
        <li className = 'list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className ="badge badge-pill bg-primary text-light">
                   
                    ${props.cost}
                    
                </span>
                <TiDelete size ='1.5em'></TiDelete>
                {/* ${props.cost} */}
                
            </div>
        </li>


    );
};

export default ExpenseItem;