import React from "react";

const fName = "Shardul";
const lName = "Shinde"
const year = new Date().getFullYear();

function Footer(){
    return <div>
            <hr />
            <p> created by {`${fName} ${lName}`}</p>
            <p> <span>&#169;</span> copyright {year}</p>
        </div>
}

export default Footer;