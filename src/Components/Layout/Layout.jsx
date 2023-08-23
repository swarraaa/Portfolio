import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import HeroSection from '../HeroSection/HeroSection'
import Skills from '../Skills/Skills'
import style from './Layout.module.css'
import Projects from '../Projects/Projects'
import Positions from '../Positions/Positions'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <HeroSection />
      <Skills />
      <Positions />
      <Projects />
      <Footer />
    </div>
  )
}

export default Layout
