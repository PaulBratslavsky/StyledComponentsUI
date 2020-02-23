import React from 'react'
import { MdClear, MdReorder } from 'react-icons/md'

import { UIMainHeader } from '../../UIComponents'
import { UIContext } from '../../Context/UIContext'


export default function MainHeader() {
  const { methods, state } = React.useContext(UIContext)
  console.log(methods, 'Show me')
  return <UIMainHeader >
    <div className="logo"><button onClick={methods.toggleSideMenu}>{state.toggleMenuState ? <MdClear/> : <MdReorder/>}</button><h2>Main Header</h2></div>
    <div className="menu">User</div>
  </UIMainHeader>
 
}
