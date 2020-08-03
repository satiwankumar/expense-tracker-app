import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
const initialState={

    transactions:[
        {id:1,text:'Flower',amount:-150},
        {id:2,text:'Flower',amount:-250},
        {id:3,text:'salary',amount:30000}
    ]

}

//create context
export const GlobalContext = createContext(initialState);

//context provider
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState)

    //FUNCTION ACTIONS
    function DeleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id  
        })
    }
       //FUNCTION ACTIONS
       function AddTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }




    return (<GlobalContext.Provider value={{transactions:state.transactions,DeleteTransaction,AddTransaction}}>
            {children}
        </GlobalContext.Provider>)
}
