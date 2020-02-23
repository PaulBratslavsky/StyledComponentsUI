import React from 'react';

export const UIContext = React.createContext();

export default function UIContextProvider({children}) {

  const [ toggleMenuState, setToggleMenuState ] = React.useState(true)

  function toggleSideMenu() {
    setToggleMenuState( (prevState) => { return !prevState })
  }
  
  const state = {
    toggleMenuState
  }

  const methods = {
    toggleSideMenu,
  }

  return<UIContext.Provider value={{state, methods}}>
    {children}
  </UIContext.Provider>
}