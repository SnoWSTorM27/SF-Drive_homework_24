import React from "react";

import logoVK from "../img/logo_vk.webp";
import logoinstagram from "../img/logo_instagram.webp";
import logoFacebook from "../img/logo_facebook.webp";

function Footer(props) {
       
    return (
        <footer>
            <p className="footerCopyright"> { props.Copyright } </p>
            <div className="footerContainer">
                <a className="footerLink" href="" target="_blank" rel="nofollow"><img src={logoVK} alt="logo Вконтакте" /></a>
                <a className="footerLink" href="" target="_blank" rel="nofollow"><img src={logoinstagram} alt="logo instagram" /></a>
                <a className="footerLink" href="" target="_blank" rel="nofollow"><img src={logoFacebook} alt="logo facebook" /></a>
            </div>
            
        </footer>
    )
}

export default Footer;