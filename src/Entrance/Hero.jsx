import "./css/hero.css";
import { Button, ButtonGroup, Card, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePicture from './Images/profilePicture.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';  // GitHub ikonu için import

function Hero() {
    return (
        <div className="hero-container">
            <h4 className="hero-name" style={{ color: "#4338CA", fontSize: "15px" }}>Murat ŞAŞ</h4>
            <Card className="profile-card">
                <div className="profile-content">
                    <CardText className="profile-bio">
                        <h5 style={{ fontWeight: "bold" }}>Frontend Developer</h5>
                        Hello! I'm Murat Şaş, a frontend developer focused on creating user-centered, interactive, and responsive web interfaces. I have experience with HTML, CSS, and JavaScript, as well as modern frameworks like React and Vue.js. I care deeply about performance, accessibility, and mobile compatibility. I’m a team player who values writing clean, maintainable, and scalable code.
                    </CardText>

                    <ButtonGroup className="contact-button-group">
                        <Button color="primary" className="contact-button">
                            Hire me
                        </Button>
                        <Button
                            color="primary"
                            outline
                            tag="a"
                            href="https://github.com/murattsas"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="me-2" />
                            Github
                        </Button>
                        <Button
                            color="primary"
                            outline
                            tag="a"
                            href="https://www.linkedin.com/in/murat-%C5%9Fa%C5%9F-b35159282/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="me-2" />
                            LinkedIn
                        </Button>
                    </ButtonGroup>

                </div>

                <img
                    src={profilePicture}
                    alt="Murat Şaş Profil Fotoğrafı"
                    className="profile-image"
                />
            </Card>
        </div>
    );
}

export default Hero;