import React from 'react'
import { UIMainContent } from '../../UIComponents'
import SideMenu from '../SideMenu/sidemenu'
import { UIContext } from '../../Context/UIContext'

export default function MainContent() {

const { state } = React.useContext(UIContext)

  return <UIMainContent menuOpen={state.toggleMenuState}>
      <SideMenu />
      <h2 style={{background: 'yellow'}}>Page View</h2>
  </UIMainContent>
}
