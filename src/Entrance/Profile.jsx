import { Button, ButtonGroup, Card, CardText, List, Label, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';  // GitHub ikonu için import
import "./css/profile.css"

function Profile() {
    return (
        <div className='div-Profile'>
            <h3 style={{ fontSize: "48px", color: "#1F29337" }}>Profile</h3>
            <div className='div-ProfileAboutMe'>
                <div className='div-Pro'>
                    <Label style={{ color: "#4338CA", fontSize: "28px" }}>Profile</Label>
                    <Table borderless>
                        <thead>

                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row" style={{ fontWeight: 'bold' }}>
                                    Date of Birth
                                </td>
                                <td>
                                    23.03.2000
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" style={{ fontWeight: 'bold' }}>
                                    Location
                                </td>
                                <td>
                                    Mersin
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" style={{ fontWeight: 'bold' }}>
                                    Education
                                </td>
                                <td>
                                    Istanbul Beykent University | Computer Engineering
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" style={{ fontWeight: 'bold' }}>
                                    Target Role
                                </td>
                                <td>
                                    Full Stack Developer
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Label style={{ color: "#4338CA", fontSize: "28px" }}>About Me</Label>
                    <p>I graduated from Istanbul Beykent University with a degree in Computer Engineering. Throughout my education, I have placed great importance on reinforcing the theoretical knowledge and skills I gained by applying them in real-world projects. With a strong interest in technology and software, I am always eager to learn and improve myself.

                        I gained valuable experience in corporate IT infrastructure and banking technologies during my internship at TEB Bank's IT department. Additionally, I contributed to software development processes and project management during my internship at NeoKod R&D Software Company in Ankara. These experiences strengthened my teamwork and problem-solving skills.

                        I am motivated to continuously grow and learn new technologies in my career. My goal is to add value to the projects I work on and make a meaningful impact in the technology field.</p>
                </div>


            </div>

        </div>
    );
}

export default Profile;