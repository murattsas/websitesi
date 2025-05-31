import "./css/header.css";
import { Button, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        } else {
            setIsDarkMode(prefersDark);
        }
    }, []);

    useEffect(() => {
        const theme = isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [isDarkMode]);

    return (
        <header>
            <div className="div-Header">
                <div className="div-TurkceyeGec">
                    <FormGroup switch className="formGroup-TurkceyeGec">
                        <Input
                            type="switch"
                            checked={isDarkMode}
                            onChange={() => setIsDarkMode(!isDarkMode)}
                            role="switch"
                            aria-label="Toggle dark mode"
                        />
                        <Label style={{ flex: 2 }} check>
                            {isDarkMode ? "Dark Mode" : "Light Mode"}
                        </Label>
                        <span style={{
                            borderLeft: '1px solid #ccc',
                            height: '20px',
                            margin: '0 10px',
                            display: 'inline-block'
                        }}></span>
                        <a href="TurkceyeGec" className="a-TurkceyeGec">Türkçeye Geç</a>
                    </FormGroup>
                </div>

                <div className="div-skillsProjects">
                    <nav className="nav-items">
                        <a href="#" className="a-HeaderLink">Skills</a>
                        <a href="#" className="a-HeaderLink">Project</a>
                    </nav>
                    <div>
                        <Button color="primary" outline>Hire me</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;