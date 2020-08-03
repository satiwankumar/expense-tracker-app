import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {Balance} from './components/Balance'
import { IncomeExpense } from './components/IncomeExpense';
import { Transactions } from './components/Transactions';
import { AddTransaction } from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
    <Header/> 

    <div className="container" >
     <Balance/>
     <IncomeExpense/>
     <Transactions/>
     <AddTransaction/>
     
    </div>
    </GlobalProvider>
  );
}

export default App;
