import React, { useEffect, useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import "./Navbar.css"
import logoSrc from "../../Resources/logo192.png"
import axios from "axios"

const NavBar = () => {
    // sign in and out of the user
    let [user, setUser] = useState(null);

    // getting username through jwt
    let history = useHistory();
    let token = localStorage.getItem("token");
    useEffect(() => {
        axios.post("/api/me", {
            token: token
        }).then((data) => {
            setUser(data.data.username);
        }).catch((err) => {
            history.push("/sign");
            console.log(err);
        })
    }, [user])

    function signOut(event) {
        localStorage.setItem("token", "");
        window.location.reload(true);
        alert("User succefully loged out");
    }
    return (
        <>
            <div className="sticky-top">
                <nav className="navbar sticky-top px-2 navbar-expand-sm navbar-dark text-white bg-primary" id="navBarCustom" >
                    <img id="logoMenu" src={logoSrc} alt="logo"></img>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09"
                        aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse font-italic" id="navbarsExample09">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link userName" exact to="/">Home</NavLink>
                                <span className="sr-only">(current)</span>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link userName" to="/forum">Forum</NavLink>
                            </li>
                            {user == null ? (
                                <li className="nav-item">
                                    <NavLink className="nav-link userName" to="/sign">Sign In/Up</NavLink>
                                </li>
                            )
                                : (
                                    <li className="nav-item">
                                        <NavLink className="nav-link userName" to="/" onClick={signOut} >Sign Out</NavLink>
                                    </li>
                                )
                            }
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdown10" style={{ padding: "5px" }}>
                                    <NavLink className="nav-link userNameBox" style={{ color: "black" }} to="/contact">Contact Us</NavLink>
                                    <NavLink className="nav-link userNameBox" to="/About" style={{ color: "black" }}>About</NavLink>
                                </div>
                            </li>
                            <li className="nav-item mx-3 text-primary userName">
                                <h4 className="nav-link">{user}</h4>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default NavBar;
