import React from "react"
import "./CommonPS.css"
import "./Profile.css"
// images require
import akashSrc from "../../Resources/Akash Image.jpg"
import ComputerOutlined from "@material-ui/icons/ComputerOutlined"

const Profile = () => {
    return (
        <>
            <div className="profileMain font-family-times">
                <h1 className="Heading">Profile</h1>
                <h5 className="Heading2">I'm Full Stack Developer and Competative Programmer</h5>
                <div style={{ marginLeft: "20%", marginRight: "20%" }}>
                    <hr style={{ width: "100%" }}></hr>
                </div>
                <div className="grandParentProfile">
                    <div className="parentProfile">
                        <div className="child1Profile">
                            <h4 className="Heading3">Details</h4>
                            <h3>Akash Suresh Ghadge</h3>
                            <div><a href="https://www.gcoeara.ac.in/" id="collegeName" target="blank">Govt. College of Engineering and Research,Awasari,Pune</a></div>
                            <h5 style={{ fontWeight: "600" }}>Computer Engineer <ComputerOutlined className="computerIcon"></ComputerOutlined></h5>
                            <p>Full Stack Developer<br></br>
                                Robotics Enthusiast <br></br>
                                Computer Vision Enthusiast</p>
                            <div ><a href="https://rrlgcoeara.in/" id="labName" style={{ textDecoration: "none" }} target="blank">Team Member,RRL(2019-21)</a></div>
                        </div>
                        <div className="child2Profile">
                            <img id="akashImage" src={akashSrc} alt="akash pic"></img>
                        </div>
                        <div className="child3Profile">
                            <h4 className="Heading3">About Me</h4>
                            <p className="aboutTextProfile">
                                I am second year student  persuiving my bachlors degree in Computer Engineering at<a href="https://www.gcoeara.ac.in/" id="collegeName" target="blank"> Govt. College of Engineering and Research,Awasari,Pune</a>
                                I have 8 months experience in MERN stack Devlopment.
                                I have good experience in Data Structure and Algorithms.I also have experience Flask and Angulr Frameword.I am also worked as Team member(Programmer) at    <a href="https://rrlgcoeara.in/" id="labName" style={{ textDecoration: "none" }} target="blank">Team Member,RRL(2019-21)</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;
