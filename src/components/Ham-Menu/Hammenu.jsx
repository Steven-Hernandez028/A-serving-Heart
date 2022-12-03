import { motion, useCycle } from "framer-motion";
import { Nav } from "./Nav";
import { Toggle } from "./Toggle";
import "./Hammenu.scss";


const sidebar = {
  open: (height = 1000) => ({
    y:-15,
    x: -175,
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 2,
    },

  }),
  closed: {
 
    x:0,
    clipPath: "circle(30px at 40px 40px)",
    
    transition: {
      delay: .5,
      type: "spring",
      stiffness: 400,
      damping: 40
    },
  }
};


export const Hammenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (


    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom="100%"
    >

      <motion.div  className="navbar" variants={sidebar} />
      <Nav isOpen ={isOpen} />
      <Toggle toggle={() => toggleOpen()} />


    </motion.nav>




  )
}
