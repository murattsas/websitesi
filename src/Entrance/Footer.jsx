import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, ButtonGroup, Label } from 'reactstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './css/projects.css';
import "./css/footer.css"

function Footer() {
    return (
        <div className='div-footer'>
            <div>
                <Label style={{fontSize:"20px"}}>muratsas05@gmail.com</Label>
            </div>
            <div>
                <nav className='nav-FooterBlogGitHub-Linkedin'>
                    <a href="#footer"><Label>Personel Blog</Label></a>
                    <a href="#footer"><Label>GitHub</Label></a>
                    <a href="#footer"><Label>Linkedin</Label></a>
                </nav>
            </div>
        </div>
    )
}

export default Footer;