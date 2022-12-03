import { motion } from "framer-motion";
import { useEffect } from "react";
import './Hammenu.scss';

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 50, velocity: -10}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffnes: 100},
            
        },
        display:"none"
    }
};


export const Items = ({ id, text, icon, isOpen }) => {



 
    
return (

        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: .95 }}
            style={{display: isOpen? "flex" : null}}
        >
            <span className="icon">{icon}</span>

            <div className="text-placeholder" >
                <span className="text">{text}</span>
            </div>


        </motion.li>
    )
}
