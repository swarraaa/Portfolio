import React from 'react'
import styles from './Positions.module.css'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

const Position = ({ index, val, club, post, logo, mainControls }) => {
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
        >
          <img src={logo} alt={club} className={styles.icons} />
          <h3>{post}</h3>
          <h3>at</h3>
          <h3>{club}</h3>
        </div>
      </motion.div>
    </div>
  )
}

export default Position
