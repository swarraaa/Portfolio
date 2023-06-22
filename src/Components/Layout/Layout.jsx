import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import HeroSection from '../HeroSection/HeroSection'
import Skills from '../Skills/Skills'
import style from './Layout.module.css'
import Background from '../Background/Background'

const Layout = () => {
  return (
    <div>
      <Background />
      {/* <Sidebar /> */}
      <HeroSection />
      {/* <Skills /> */}
    </div>
  )
}

export default Layout
