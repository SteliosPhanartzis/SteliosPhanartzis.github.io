import "./Homepage.css"
function Homepage() {
    return(
        <div className="homepage-body">
            <div className="homepage-title">
                <div>STELIOS</div>
                <div>PHANARTZIS</div>
            </div>
            <div class="scrolling-words-container">
                <div>I am a passionate </div>
                <div class="scrolling-words-box">
                    <ul>
                    <li class="item-1">Full-Stack Engineer</li>
                    <li class="item-2">Photographer</li>
                    <li class="item-3">3D Modeler</li>
                    <li class="item-4">Web Developer</li>
                    <li class="item-5">Full-Stack Engineer</li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Homepage;