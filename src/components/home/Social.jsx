import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://api.whatsapp.com/send?phone=61981248701&text=Olá, gostaria de mais informações!" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-whatsapp"></i>
        </a>

        <a href="mailto:brunojess.info@gmail.com" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-mailbox"></i>
        </a>
    </div>
  )
}

export default Social
