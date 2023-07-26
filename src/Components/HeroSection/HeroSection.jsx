import { motion } from 'framer-motion'
import style from './HeroSection.module.css'
import DrawSvg from '../Utils/DrawSvg/DrawSvg'
import Background from '../Utils/Background/Background'
import profile from '../../Images/profile.jpg'

const title = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
const pfp = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
  },
}

const HeroSection = () => {
  return (
    <motion.div className={style.mainContainer}>
      <motion.div className={style.titleContainer}>
        <motion.img
          src={profile}
          alt=''
          className={style.profile}
          variants={pfp}
          animate='visible'
          initial='hidden'
          transition={{ duration: 0.5 }}
        />
        <motion.h5
          variants={title}
          initial='hidden'
          animate='visible'
          transition={{ delay: 0.3 }}
        >
          Hello, I'm
        </motion.h5>
        <motion.h3
          variants={title}
          initial='hidden'
          animate='visible'
          transition={{ delay: 0.5 }}
        >
          Swarada Bhosale
        </motion.h3>
        <motion.h4
          variants={title}
          initial='hidden'
          animate='visible'
          transition={{ delay: 0.7 }}
        >
          aka swarraa
        </motion.h4>
        <motion.p
          variants={title}
          initial='hidden'
          animate='visible'
          transition={{ delay: 0.9 }}
        >
          I am a Frontend Developer with a passion for desiging. I believe I can
          make your dream website a reality. Feel free to imagine your cool
          website and leave the creation to me! 😎
        </motion.p>
      </motion.div>
      <motion.div className={style.Svg}>
        <DrawSvg />
      </motion.div>
      <Background />
    </motion.div>
  )
}

export default HeroSection
