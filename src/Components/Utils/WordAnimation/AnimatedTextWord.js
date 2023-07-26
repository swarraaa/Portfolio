import React from 'react'
import { motion } from 'framer-motion'
import style from './Animate.module.css'

const AnimatedTextWord = ({ text }) => {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={style.wordMain}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {words.map((word, index) => (
        <motion.span variants={child} className={style.word} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedTextWord
