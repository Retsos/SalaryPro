import React from 'react';
import './Header.css';
import './LoginRegister.css'

function Header(){


    function HandleClick(){
        const wrapper = document.querySelector('.wrapper');

        wrapper.classList.add('active-popup');
    }

    return(
        <>
            <header>
                <h2 className="Logo">Logo</h2>
                <nav className="navigation">
                    <a href="Home.html">Αρχική</a>
                    <a href="Ypiresies.html">Υπηρεσίες</a>
                    <a href="about.html">Σχετικά</a>
                    <button className="login" onClick={HandleClick}>Login</button>
                </nav>
            </header>
        </>
    )
}

export default Header 