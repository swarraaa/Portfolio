import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import HeroSection from '../HeroSection/HeroSection'
import Skills from '../Skills/Skills'
import style from './Layout.module.css'
import Projects from '../Projects/Projects'
import Positions from '../Positions/Positions'

const Layout = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <HeroSection />
      <Skills />
      <Positions />
      <Projects />
    </div>
  )
}

export default Layout
