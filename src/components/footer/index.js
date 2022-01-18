import React from 'react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <footer className="w-full px-20 py-7 border-t border-gold relative">
            <img className="mb-3" src="./assets/renee-logo-footer.png" alt="Logo da empresa Renee Trajar"></img>
            <div className="flex justify-between">
                <p className="text-light-gray">CNPJ:04.487.685/0001-01</p>
                <p className="text-dark-gray">Copyright: 2021 © Renee Trajar - Todos os direitos reservados.</p>
            </div>
            <div className="drop-shadow-lg absolute scroll-up flex justify-center items-center bg-white cursor-pointer" onClick={scrollToTop}>
                <img src="./assets/up-arrow.png" alt="Seta para cima"></img>
            </div>
        </footer>
    )
}

export default Footer
