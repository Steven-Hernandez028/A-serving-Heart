import { motion } from 'framer-motion';
import { Items } from './Items';
import  {AiOutlineHome, AiOutlineExclamationCircle, AiOutlineQuestion}  from 'react-icons/ai';
import {TbCross} from 'react-icons/tb';
import { TfiWorld } from 'react-icons/tfi';
import { MdOutlineContactPage } from'react-icons/md';

const variants ={
    open:{
        transition: { staggerChildren:.1, delayChildren: 0.5},
       
    },
    closed:{
        transition: { staggerChildren: 0.1, staggerDirection: -1}
    }
};


const items =[
    { id: 0, text: "Home", icon: <AiOutlineHome/> },
    { id: 1, text: "About Us", icon: <AiOutlineExclamationCircle/> },
    { id: 2, text: "Quieres ser salvo?", icon:<TbCross/> },
    { id: 3, text: "Campaing", icon: <TfiWorld/>},
    { id: 4, text: "FAQ", icon: <AiOutlineQuestion/> },
    { id: 5, text: "Contact", icon: <MdOutlineContactPage/> }
];

export const Nav = ({isOpen}) => {
  return (

    <motion.ul variants={variants}>
        {items.map ((item)=> (
            <Items  isOpen={isOpen} id={item.id} key={item.id} text={item.text} icon={item.icon} />
        ))}
    </motion.ul>
  )
}
