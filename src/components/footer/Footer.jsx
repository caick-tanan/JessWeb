import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div>
       <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Dr. Bruno Jess</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Serviços</a>
                </li>

                <li>
                    <a href="#portifolio" className="footer__link">Certificações</a>
                </li>
            </ul>

            <div className="footer__social">

                <a href="https://api.whatsapp.com/send?phone=61993709351&text=Olá, gostaria de mais informações!" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className="uil uil-whatsapp"></i>
                </a>

                <a href="mailto:caick_tanam@gmail.com" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className="uil uil-mailbox"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Dr. Bruno jess. Todos os direitos reservados.</span>
        </div>
       </footer>
    </div>
  )
}

export default Footer
