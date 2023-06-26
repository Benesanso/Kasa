import React from "react";
import { Link } from "react-router-dom";
import './errorpage.scss';

function ErrorPage(){
    return (
        <div className="error-page">
            {/* Titre de la page d'erreur */}
            <h1 className='title'>404</h1>
            {/* Message d'erreur */}
            <p className="text">Oups! La page que vous demandez n'existe pas.</p>
            {/* Lien de retour vers la page d'accueil */}
            <Link className="back-home" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}
export default ErrorPage