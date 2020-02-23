import React from 'react'
import { UIMainContent } from '../../UIComponents'
import SideMenu from '../SideMenu/sidemenu'
import { UIContext } from '../../Context/UIContext'
import MainView from '../MainView/mainview'

export default function MainContent() {

const { state } = React.useContext(UIContext)

  return <UIMainContent menuOpen={state.toggleMenuState}>
      <SideMenu />
      <MainView />
  </UIMainContent>
}
