import { motion } from 'framer-motion'
import style from './HeroSection.module.css'
import DrawSvg from '../DrawSvg/DrawSvg'
import Background from '../Background/Background'

const title = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const HeroSection = () => {
  return (
    <motion.div className={style.mainContainer}>
      <motion.div className={style.titleContainer}>
        <motion.h4
          variants={title}
          initial='hidden'
          animate='visible'
          transition={{ delay: 0.3 }}
        >
          Hello, I'm
        </motion.h4>
        <motion.h2
          variants={title}
          initial='hidden'
          animate='visible'
          transition={{ delay: 0.5 }}
        >
          Swarada Bhosale
        </motion.h2>
        <motion.h3
          variants={title}
          initial='hidden'
          animate='visible'
          transition={{ delay: 0.7 }}
        >
          aka swarraa
        </motion.h3>
      </motion.div>
      <motion.div>
        <DrawSvg />
      </motion.div>
      <Background />
    </motion.div>
  )
}

export default HeroSection
