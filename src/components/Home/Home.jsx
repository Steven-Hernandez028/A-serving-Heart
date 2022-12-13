import { Menu } from './components/Menu';
import { IoChevronDown } from 'react-icons/io5';
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import bghome from '../../media/img/header.png';
import './styles.scss';

export const Home = () => {
  
  
    const [ref, inView] = useInView({
      threshold: 0.5,
      triggerOnce: false
    });
  const { scrollY } = useScroll();
  const object_h1 = useTransform(scrollY, [0, 900], [0, -100]);
  const object_h3 = useTransform(scrollY, [0, 900], [0, -100]);
  const btn_text = "Show more";

  






  return (
    <>
      <div className='home'>

        <img className='home_wrapper_img' src={bghome} alt='bghome' />
        <Menu />


        <motion.div
          className='home_menu_title'
          ref={ref}
        >

          <motion.h1
            style={{ y: object_h1 }}
            initial={{ opacity: 0, scale: .5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 2,
              delay: .2,
              ease: 'easeOut'
         
         
            }}
            className='home_menu_title_h1'>A Serving <span>Heart</span></motion.h1>
          <motion.h3
            style={{ y: object_h3 }}
            initial={{ opacity: 0, scale: .5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 2,
              delay: .5,
              ease: 'easeOut'
         
         
            }}
          >Loving God and serving his people in the Dominican Republic and Haiti.</motion.h3>

          <motion.input
            whileHover={{
              borderRadius: 2,
              transition: { duration: 2 },
            }}
            initial={{ opacity: 0, scale: .5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 2,
              delay: .5,
              ease: 'easeOut'
         
         
            }}
            whileTap={{ scale: 1 }}
            className="home_menu_title_button" type="submit" value={btn_text} />

        </motion.div>



        <motion.div

          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 2, ease: 'easeOut' }}
          ref={ref}
          className='home_down_box'>


          <IoChevronDown className='home_down_button' />

        </motion.div>



      </div>



    </>
  )

}
