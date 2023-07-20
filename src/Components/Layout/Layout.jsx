import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import HeroSection from '../HeroSection/HeroSection'
import Skills from '../Skills/Skills'
import style from './Layout.module.css'

const Layout = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <HeroSection />
      <div className={style.container}>
        <Skills />
      </div>
    </div>
  )
}

export default Layout
