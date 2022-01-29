import { motion } from "framer-motion";

type NavButtonProps = {
    section: string,
    cls?: string,
    onclick?: () => void
}
function NavButton({section, cls, onclick}: NavButtonProps) {
    const capitalCase = (text: string) => {
        let res = text.split(" ");
        for(let idx = 0; idx < res.length; idx++) {
            res[idx] = res[idx].charAt(0).toUpperCase() + res[idx].slice(1);
        }
        return res.join(" ");
    }
    return (
        <div className={'navOption navItem ' + cls} onClick={onclick}>
            <a href={`#${section}`}>
                <div className="hover">{capitalCase(section)}</div>
            </a>
        </div>
    )
}

export function AnimatedNavButton({section, cls, onclick}: NavButtonProps) {
    const variants = {
        open: {
          opacity: 1,
        },
        closed: {
          opacity: 0,
        }
      };
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
                <NavButton 
                    section={section}
                    cls={cls}
                    onclick={onclick}/>
        </motion.li>
    )
}

export default NavButton;
