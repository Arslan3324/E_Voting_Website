import React from 'react'
import './team.css'

const Team = () => {
    return (
        <div>
            <div className="about-section">
                <h1>About Us</h1>
                <p>This is our Semester end Project of the Subject Web-Engineering</p>

            </div>

            <h2 className="teamhead">Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="https://i.ibb.co/LDTTmzy/IMG-3007.jpg" alt="Jane" className= "img"/>
                            <div className="container">
                                <h1 className="name">Arslan Bhutto</h1>
                                <p className="title">Front-End Developer<br />Back End Developer</p>
                                <p>Student of Sukkur IBA University</p>
                                <p>arslan@example.com</p>
                                <p><button className="button" ><a href="https://web.facebook.com/arslan.khan.338211/" target="_blank">Contact</a></button></p>
                            </div>
    </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src="https://i.ibb.co/hLSBDzm/ali.jpg" alt="Mike" className= "imgali"/>
                                <div className="container">
                                    <h1 className="name">Ali Baloch</h1>
                                    <p className="title">Front-End Developer</p>
                                    <p>Student of Sukkur IBA University</p>
                                    <p>ali@example.com</p>
                                    <p><button className="button"><a href="https://web.facebook.com/albaloshiali110" target='_blank'>Contact</a></button></p>
                                </div>
    </div>
                        </div>

                        </div>
                    </div>
                    
                    )
}

export default Team
