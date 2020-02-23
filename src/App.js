import React from 'react'
import { UIMainWrapper } from './UIComponents'
import MainHeader from './Components/MainHeader/mainheader'
import MainContent from './Components/MainContent/mainconent'

export default function App() {
  return <UIMainWrapper>
      <MainHeader />
      <MainContent />
  </UIMainWrapper>
}

