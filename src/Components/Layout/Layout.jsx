import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import HeroSection from '../HeroSection/HeroSection'
import Skills from '../Skills/Skills'
import style from './Layout.module.css'
import Positions from '../Positions/Positions'

const Layout = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <HeroSection />
      <Skills />
      <Positions />
    </div>
  )
}

export default Layout
