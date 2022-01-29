import React from 'react'

type SidebarButtonProps = {
    onclick: () => void,
    cls?: string
} 
function SidebarButton({onclick, cls}: SidebarButtonProps) {
    return (
        <div className={`sidebarButton navItem ${cls}`} onClick={onclick}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>
    )
}

export default SidebarButton
