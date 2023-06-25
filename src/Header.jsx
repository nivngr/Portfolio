import React from "react"
import nivImage from '../assets/Niv-image-no-bg.png'
import './styles/Header.css'

export default function Header() {
    return (
        <header className="header">
            <h2 className='header-title'>Niv Nagar</h2>
            <img src={nivImage} className="image" alt="Vite logo" />
            <div className="header-right-section">
                <a href="https://github.com/nivngr" class="fa fa-github"></a>
                <a href="https://www.linkedin.com/in/niv-nagar-8605a6190/" class="fa fa-linkedin"></a>
                <a href="https://www.facebook.com/niv.nagar" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
            </div>
        </header>
    )
}