import pageContext from '../data/PageContext';
import { useContext } from 'react';
import AnimatedNavButton from './NavButton';
import { motion } from 'framer-motion'

type NavSidebarProps = {
    onclick?: () => void
}

function NavSidebar({onclick}: NavSidebarProps) {
    const navSections = useContext(pageContext);
    const variants = {
        open: {
            backgroundColor: 'white',
            opacity: 1,
            height: '100vh',
            width: '100vw'        },
        closed: {
            backgroundColor: 'white',
            opacity: 0,
            height: 0,
            width: 0,
            display: 'none',        
        }
    };
    return (
        <div className={'sidebarOverlay'}>
            <motion.ul variants={variants}>
                {
                    navSections.map(value => (
                        <AnimatedNavButton key={value.sectionTitle} section={value.sectionTitle} onclick={onclick}/>
                    ))
                }
            </motion.ul>
        </div>
    )
}

export default NavSidebar
