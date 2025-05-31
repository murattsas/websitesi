import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, ButtonGroup } from 'reactstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './css/projects.css';
import image1 from './Images/ad5081bf69bb4825e42350e768340fdbec09d78b.png';
import image2 from './Images/64b806122ad18b91bc83b5e0c2524ee319ac4a12.png';
import image3 from './Images/600e630ba9370e031b441737654465d0f374af51.png';


function Projects() {

    return (
        <div className="projects-container">
            <h3 style={{ fontSize: "48px", color: "#1F29337" }}>Projects</h3>
            <div className="projects-header">
                <div className="title-divider"></div>
            </div>

            <div className="projects-grid">
                {/* Project 1 */}
                <Card className="project-card">
                    <img alt="Project 1" src={image1} className="project-image" />
                    <CardBody>
                        <CardTitle tag="h5">WorkIntech</CardTitle>
                        <CardSubtitle tag="h6" className="project-subtitle">
                            Full-stack Application
                        </CardSubtitle>
                        <div className="card-divider"></div>
                        <CardText className="project-description">
                            A comprehensive work integration platform with React frontend and Node.js backend.
                        </CardText>
                        <ButtonGroup className="project-buttons">
                            <span className="bordered-text">React</span>
                            <span className="bordered-text">JavaScript</span>
                        </ButtonGroup>
                        <nav className='nav-githubWeb'>
                            <a href="#github">Github</a>
                            <a href="#WebSite">WebSite</a>
                        </nav>
                    </CardBody>
                </Card>

                {/* Project 2 */}
                <Card className="project-card">
                    <img alt="Project 2" src={image2} className="project-image" />
                    <CardBody>
                        <CardTitle tag="h5">Random Jokes</CardTitle>
                        <CardSubtitle tag="h6" className="project-subtitle">
                            API Integration
                        </CardSubtitle>
                        <div className="card-divider"></div>
                        <CardText className="project-description">
                            Joke generator app that fetches random jokes from a public API.
                        </CardText>
                        <ButtonGroup className="project-buttons">
                            <span className="bordered-text">React</span>
                            <span className="bordered-text">JavaScript</span>
                        </ButtonGroup>
                        <nav className='nav-githubWeb'>
                            <a href="#github">Github</a>
                            <a href="#WebSite">WebSite</a>
                        </nav>
                    </CardBody>
                </Card>

                {/* Project 3 */}
                <Card className="project-card">
                    <img alt="Project 3" src={image3} className="project-image" />
                    <CardBody>
                        <CardTitle tag="h5">Journey</CardTitle>
                        <CardSubtitle tag="h6" className="project-subtitle">
                            Travel Blog
                        </CardSubtitle>
                        <div className="card-divider"></div>
                        <CardText className="project-description">
                            A responsive travel blog with location-based content filtering.
                        </CardText>
                        <ButtonGroup className="project-buttons">
                            <span className="bordered-text">React</span>
                            <span className="bordered-text">JavaScript</span>
                        </ButtonGroup>
                        <nav className='nav-githubWeb'>
                            <a href="#github">Github</a>
                            <a href="#WebSite">WebSite</a>
                        </nav>
                    </CardBody>
                </Card>
            </div>

            <div className="bottom-divider"></div>
        </div>
    );
}

export default Projects;