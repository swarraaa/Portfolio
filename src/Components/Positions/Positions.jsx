import React, { useEffect, useRef } from 'react'
import styles from './Positions.module.css'
import Position from './Position'
import AnimatedTextCharacter from '../Utils/WordAnimation/AnimatedTextCharacter'
import positions from './allPositions'
import { motion, useAnimation, useInView } from 'framer-motion'

const Positions = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])
  return (
    <>
      <motion.div className={styles.mainContainer}>
        <div className={styles.heading}>
          <AnimatedTextCharacter text='Positions of Responsibilities' />
        </div>
        <div className={styles.phHeading1}>
          <AnimatedTextCharacter text='Positions of' />
        </div>
        <div className={styles.phHeading2}>
          <AnimatedTextCharacter text='Responsibilities' />
        </div>
        <motion.div
          whileInView={{ scale: 1, when: 'beforeChildren' }}
          className={styles.skills}
          ref={ref}
        >
          {positions.map((position, index) => (
            <Position
              key={index}
              val={position.index}
              club={position.club}
              post={position.post}
              logo={position.logo}
              mainControls={mainControls}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Positions
