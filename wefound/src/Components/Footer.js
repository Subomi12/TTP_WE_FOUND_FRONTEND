import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Footer.css"

function Footer(){

    return(
        <footer>
            <div>
                <a href="https://developer.kroger.com/" target="_blank"><p className="logoAreaFooter">Powered by
                    <img className="krogerLogo" src="https://developer.kroger.com/assets/images/Kroger_Developer_Logo_Blue.svg" /></p></a>
            </div>
        </footer>

    )
}

export default Footer