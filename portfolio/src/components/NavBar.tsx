import pageContext from '../data/PageContext';
import { useContext, useState } from 'react';
import NavButton from './NavButton';
import SidebarButton from './SidebarButton'
import NavSidebar from './NavSidebar'
import Logo from './Logo'
import { motion } from 'framer-motion';

function NavBar() {
    const navSections = useContext(pageContext);
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar(state => !state);
    }
    return (
        <motion.nav
            animate={showSidebar? "open" : "closed"}
        >
            <div className="nav">
                <div className="navGroup">
                    <SidebarButton onclick={toggleSidebar} cls="mobile"/>
                    <Logo onclick={() => setShowSidebar(false)}/>
                    {
                        navSections.map(value => (
                            <NavButton key={value.sectionTitle} section={value.sectionTitle} cls='desktop'/>
                        ))
                    }
                </div>
            </div>
            <NavSidebar onclick={toggleSidebar}/>
        </motion.nav>
    )
}

export default NavBar;
