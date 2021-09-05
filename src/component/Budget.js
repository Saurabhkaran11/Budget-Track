
import React, {useContext} from 'react';
//import { AppContext } from '../context/Context';
import { Context } from './Context';
const Budget = () => {
    const {budget} = useContext(Context);

    return(
        <div className='alert alert-secondary'>
            <span>Budget: ${budget}</span>
        </div>
    );
};

export default Budget;