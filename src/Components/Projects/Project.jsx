import React from 'react'
import styles from './Project.module.css'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

const Project = ({ index, val, name, org, description, icon, mainControls }) => {
  const initialX = val === 1 ? '-1000px' : '1000px'
  const box = {
    hidden: {
      x: initialX,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }
  return (
    <div className={styles.card}>
      <motion.div
        variants={box}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 1 }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={styles.singleCard}
          style={{ backgroundImage: `url(${icon})` }}
        >
          <h1>{name}</h1>
          <h2>{org}</h2>
          <p>{description}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Project
