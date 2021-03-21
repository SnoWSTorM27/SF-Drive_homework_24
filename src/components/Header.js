import React from "react";

import Btn from "./Btn";

import logoSkillDrive from "../img/Logo_SkillDrive.webp";
import mobileMenu from "../img/menu-mobile.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";


function Header() {
        return (
            <header>
                <a>
                    <img src={logoSkillDrive} alt="logo SkillDrive" className="headerLogo" /> 
                </a>
                <nav>
                    <Link className="navLink" to="/">О нас</Link>
                    <Link className="navLink" to="/">Условия</Link>
                    <Link className="navLink" to="/qna">Частые вопросы</Link>   
                    {/* <a className="navLink" href="">О нас</a>
                    <a className="navLink" href="">Условия</a>
                    <a className="navLink" href="">Частые вопросы</a> */}
                </nav>
                <Btn buttonName = "Войти" />
                <img className="mobileMenu" src={mobileMenu} alt="mobile menu" /> 
            </header>
        )
}

export default Header;