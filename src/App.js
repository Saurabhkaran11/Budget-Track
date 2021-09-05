import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './component/Budget';
import Remaining from './component/Remaining';
import Expense from './component/Expense';
import ExpenseList from './component/ExpenseList';
import AddExpense from './component/AddExpense';
import { AppProvider } from './component/Context';

const App = () => {
  return(
    <AppProvider>
      <div className = 'container'>
      <h1 className = 'mt-3'> Budget Tracker </h1>
      <div className = 'row mt-3'>
        <div className = 'column-sm'>
          <Budget/>
        </div>
        <div className = 'column-sm'>
          <Remaining/>
        </div>
        <div className = 'column-sm'>
          <Expense/>
        </div>
      </div>
      <h3 className ='mt-3'>Expenses</h3>
      <div className = 'row mt-3'>
       <div className = 'column-sm'>
          <ExpenseList/>
        </div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className = 'mt-3'>
       <div className='col-sm'>
         <AddExpense/>
       </div>
      </div>
    </div>



    </AppProvider>
    
  ); 
  
};

export default App;



//className = 'badge badge-primary badge-pill mr-3'