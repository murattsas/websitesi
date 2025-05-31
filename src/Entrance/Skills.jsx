import { Button, ButtonGroup, Card, CardText, List, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';  // GitHub ikonu için import
import "./css/skills.css"

function Skills() {
    return (
        <div className='div-skills'>
            <h3 style={{ fontSize: "48px", color: "#1F29337" }}>Skills</h3>
            <div className='div-skillLabel'>
                <div>
                    <Label className='label-skills'>Java Script</Label>
                    <p>I am a frontend developer focused on JavaScript. I build interactive, user-friendly web applications using modern frameworks such as React and Vue, as well as vanilla JavaScript. I prioritize writing clean, maintainable code and pay close attention to performance optimization.</p>
                </div>
                <div>
                    <Label className='label-skills'>React</Label>
                    <p>I am a frontend developer who builds user-friendly and high-performance web applications with React.</p>
                </div>
                <div>
                    <Label className='label-skills'>Node.Js</Label>
                    <p>I am a developer who builds fast and scalable backend solutions using Node.js.</p>
                </div>
                <div>
                    <Label className='label-skills'>Python</Label>
                    <p>I am a developer who builds various applications by writing efficient and clean code with Python.

                    </p>
                </div>
                <div>
                    <Label className='label-skills'>Java</Label>
                    <p>I am a Java-focused developer building robust and scalable applications.

                    </p>
                </div>
            </div>


        </div>
    );
}

export default Skills;