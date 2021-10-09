import React from "react"


let date = new Date();
let oldYear = date.getFullYear() - 2002;
const About = () => {
    return (
        <>
            <div id="parentAboutBox">
                <div id="aboutBox" >
                    <h1 id="aboutText">I am {oldYear} year old kid and i am very curious about the programming and other tect like Robotics,Computer Vision and Embeded Systems and would like to make some contribution on it and i have passion to do this things at next level.<br></br>
                        <span style={{ display: "block", textAlign: "left" }}>
                            -Akash Ghadge
                                 </span>
                    </h1>
                </div>
            </div>
        </>
    )
}
export default About;
