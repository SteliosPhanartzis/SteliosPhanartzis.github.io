type LogoProps = {
    onclick?: () => void
}
function Logo({onclick}: LogoProps) {
    return (
        <span onClick={onclick}>
            <a href='#intro' className="navItem">
                <span id="logo">Stelios</span>
            </a>
        </span>
    )
}

export default Logo
