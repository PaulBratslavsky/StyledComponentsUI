import React from 'react'
import { UIMainHeader } from '../../UIComponents'
import { UIContext } from '../../Context/UIContext'


export default function MainHeader() {
  const { methods } = React.useContext(UIContext)
  console.log(methods, 'Show me')
  return <UIMainHeader >
    <div className="logo"><button onClick={methods.toggleSideMenu}>Click me</button><h2>Main Header</h2></div>
    <div className="menu">User</div>
  </UIMainHeader>
 
}
