import React from 'react'
import styles from './Positions.module.css'
import Position from './Position'
import AnimatedTextCharacter from '../Utils/WordAnimation/AnimatedTextCharacter'
import positions from './allPositions'

const Positions = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heading}>
          <AnimatedTextCharacter text='Positions of Responsibilities' />
        </div>
        <div className={styles.phHeading1}>
          <AnimatedTextCharacter text='Positions of' />
        </div>
        <div className={styles.phHeading2}>
          <AnimatedTextCharacter text='Responsibilities' />
        </div>
        <div className={styles.skills}>
          {positions.map((position, index) => (
            <Position
              key={index}
              club={position.club}
              post={position.post}
              logo={position.logo}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Positions
