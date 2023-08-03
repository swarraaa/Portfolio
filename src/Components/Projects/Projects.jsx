import React, { useEffect, useRef } from 'react'
import styles from './Project.module.css'
import Project from './Project'
import AnimatedTextCharacter from '../Utils/WordAnimation/AnimatedTextCharacter'
import projects from './allProjects'
import { motion, useAnimation, useInView } from 'framer-motion'

const Projects = () => {
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
          <AnimatedTextCharacter text='Projects' />
        </div>
        <motion.div
          whileInView={{ scale: 1, when: 'beforeChildren' }}
          className={styles.skills}
          ref={ref}
        >
          {projects.map((position, index) => (
            <Project
              key={index}
              val={position.index}
              name={position.name}
              org={position.org}
              description={position.description}
              icon={position.icon}
              mainControls={mainControls}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Projects
