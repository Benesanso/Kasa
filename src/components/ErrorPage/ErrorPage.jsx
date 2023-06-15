import React from "react";
import { Link } from "react-router-dom";
import './errorpage.scss';

function ErrorPage(){
    return (
        <div className="error-page">
        <h1 className='error-title'>404</h1>
        <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="back-home" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}
export default ErrorPage