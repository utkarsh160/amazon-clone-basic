import React, { useState, useContext, createContext, useReducer } from 'react';


//Prepares the Data Layer
export const StateContext = createContext();


//Wrap our App and Provide the data Layer
export const StateProvider = ({reducer,initialState,children}) => (
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    );


//Pull Information from the data layer
export const useStateValue=()=>useContext(StateContext);