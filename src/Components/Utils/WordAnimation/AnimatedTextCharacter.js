import React from 'react'
import { motion } from 'framer-motion'
import style from './Animate.module.css'

const AnimatedTextCharacter = ({ text }) => {
  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={style.charMain}
      style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem' }}
      variants={container}
      initial='hidden'
      whileInView='visible'
    >
      {letters.map((letter, index) => (
        <motion.h3 variants={child} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.h3>
      ))}
    </motion.div>
  )
}

export default AnimatedTextCharacter
