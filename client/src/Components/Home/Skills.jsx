import React, { useState } from "react"
import OneSkill from "./OneSkill"
import "./CommonPS.css"
const Skills = () => {
    let pLang = [
        { name: "C", n: 5 },
        { name: "C++", n: 5 },
        { name: "Javascript", n: 5 },
        { name: "Python", n: 4 },
        { name: "TypeScript", n: 3 },
        { name: "Arduino", n: 4 },
        { name: "Embedded C", n: 2 },
    ]
    let frameworks = [
        { name: "React", n: 4 },
        { name: "Vue", n: 4 },
        { name: "Express", n: 4 },
        { name: "Flask", n: 3 },
        { name: "Bootstrap", n: 4 },
        { name: "OpenCV", n: 4 },
    ]
    let libATemp = [
        { name: "jQuery", n: 4 },
        { name: "SASS", n: 4 },
        { name: "Mongoose", n: 4 },
        { name: "Handlebars.js", n: 4 },
        { name: "Socket.io", n: 4 },
        { name: "Redux", n: 3 },
        { name: "Vuex", n: 4 },
        { name: "Pymongo", n: 3 },
        { name: "jinja Templating", n: 3 },

    ]
    let other = [
        { name: "HTML", n: 5 },
        { name: "CSS", n: 5 },
        { name: "GIT", n: 5 },
        { name: "Material-UI", n: 4 },
        { name: "JSON", n: 4 },
        { name: "Raspberry Pi", n: 3 },
    ]
    return (
        <>
            <div className="px-3 py-4 font-family-times" style={{ backgroundColor: "rgb(217, 231, 255)" }}>
                <h1 className="Heading">Abilities</h1>
                <h5 className="Heading2">“Life without knowledge is death in disguise.”
                    - Talib Kweli</h5>
                <div style={{ marginLeft: "20%", marginRight: "20%" }}>
                    <hr style={{ width: "100%" }}></hr>
                </div>
                <h1 className="Heading3">Good knowledge of Data Structure and Algorithms.</h1>
                <div className="row my-5">
                    <div className="col-md-6">
                        <h4 className="Heading3">Programming Languages</h4>
                        <ul className="no-bullets">
                            {
                                pLang.map((val) => {
                                    return <OneSkill n={val.n.toString()} name={val.name.toString()}></OneSkill>
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h4 className="Heading3">Frame Works</h4>
                        <ul className="no-bullets">
                            {
                                frameworks.map((val) => {
                                    return <OneSkill n={val.n.toString()} name={val.name.toString()}></OneSkill>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="Heading3">Libraries and Template Engines</h4>
                        <ul className="no-bullets">
                            {
                                libATemp.map((val) => {
                                    return <OneSkill n={val.n.toString()} name={val.name.toString()}></OneSkill>
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h4 className="Heading3">Others</h4>
                        <ul className="no-bullets">
                            {
                                other.map((val) => {
                                    return <OneSkill n={val.n.toString()} name={val.name.toString()}></OneSkill>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills;
