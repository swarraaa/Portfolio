import React from 'react'
import styles from './Positions.module.css'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

const Position = ({ inedx, club, post, logo }) => {
  return (
    <Tilt className={styles.card}>
      <motion.div>
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
    </Tilt>
  )
}

export default Position
