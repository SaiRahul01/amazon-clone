import React,{createContext,useContext,useReducer} from "react"

export const StateContext=createContext()
 export const StateProvider=({reducer,intitalState,children})=>(
     <StateContext.Provider value={useReducer(reducer,intitalState)}>
         {children}
     </StateContext.Provider>
 );

 export const useStateValue=()=>useContext(StateContext)