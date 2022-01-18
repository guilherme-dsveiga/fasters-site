import React from 'react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <footer className="w-full px-20 py-7 border-t border-gold relative flex flex-col justify-center items-center md:items-start">
            <img className="mb-3 w-36" src="./assets/renee-logo-footer.png" alt="Logo da empresa Renee Trajar"></img>
            <div className="flex md:flex-row flex-col justify-between w-full">
                <p className="text-light-gray md:text-left text-center">CNPJ:04.487.685/0001-01</p>
                <p className="text-dark-gray md:text-left text-center">Copyright: 2021 © Renee Trajar - Todos os direitos reservados.</p>
            </div>
            <div className="drop-shadow-lg absolute scroll-up flex justify-center items-center bg-white cursor-pointer " onClick={scrollToTop}>
                <img src="./assets/up-arrow.png" alt="Seta para cima"></img>
            </div>
        </footer>
    )
}

export default Footer
