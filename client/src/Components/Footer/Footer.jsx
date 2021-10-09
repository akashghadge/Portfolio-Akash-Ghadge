import React, { useState } from "react"

// adding date to the footer
let date = new Date()
let dateYear = date.getFullYear()

const Footer = () => {
    return (
        <>
            <footer className="blog-footer text-center">
                <p style={{ color: "white" }}>Copyright &copy; {dateYear}</p>
            </footer>
        </>
    )
}
export default Footer;
