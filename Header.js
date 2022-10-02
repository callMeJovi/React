import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="logo"></img>
                <ul className="nav-items">
                    {/* const ul=document.createElement('ul');
            ul.className=""; */}
                    {/* that's why we use className instead of class in JSX, under the hood React is taking this JSX
            elements and turning them into the native DOM elements */}
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

//because there's only one component in this file which is Header