import React from 'react'
import styles from './Skills.module.css'
import AnimatedTextCharacter from '../WordAnimation/AnimatedTextCharacter'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import services from './allSkills'

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 55, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
}

const ServiceCard = ({ index, title, icon }) => (
  <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
    <motion.div>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={styles.singleCard}
      >
        <img src={icon} alt='web-development' className={styles.icons} />

        <h3>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
)

const Skills = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heading}>
          <AnimatedTextCharacter text="I'm skilled at" />
        </div>
        <div className={styles.skills}>
          {services.map((skill, index) => (
            <ServiceCard key={index} title={skill.title} icon={skill.icon} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills
