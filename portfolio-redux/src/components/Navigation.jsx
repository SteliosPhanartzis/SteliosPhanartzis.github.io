import './Navigation.css';

function Navigation() {
    return (
        <div class="nav">
            <div class="navGroup">
                <a href="#intro" class="navItem"><span id="logo">Stelios</span></a>
                <div class="navOption navItem"><a href="#about"><div class="hover">About</div></a></div>
                <div class="navOption navItem"><a href="#work"><div class="hover hovLeft">Work</div></a></div>
                <div class="navOption navItem"><a href="#contact"><div class="hover hovLeft">Contact</div></a></div>
                {/* <div id="footer">
                    <div class="footerIcons">
                        <a href="https://github.com/SteliosPhanartzis" target="blank"><img rel="preload" src="images/icons/github.svg" alt="Github logo" /></a>
                        <a href="https://www.linkedin.com/in/stelios-phanartzis/" target="blank"><img rel="preload" src="images/icons/linkedin.svg" alt="LinkedIn logo" /></a>
                        <a href="mailto:stelios.phan@gmail.com"><img rel="preload" src="images/icons/mail.svg" alt="Send email" /></a>
                        <a href="https://drive.google.com/file/d/1jblV1-jMdR9Km7uoUya3_Bg4-v-w7Ptr/view?usp=share_link" target="blank"><img rel="preload" src="images/icons/resume.svg" alt="resume" /></a>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Navigation;