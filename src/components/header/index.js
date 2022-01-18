import React, { useEffect, useState } from 'react';
import './styles.css';

const Header = ({ empresaRef, ternosRef, camisariaRef, depoimentosRef, contatoRef }) => {
    const [whiteHeader, setWhiteHeader] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 500) {
                setWhiteHeader(true);
            } else {
                setWhiteHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    const handleScroll = (ref) => {
        switch (ref) {
            case 'empresa':
                empresaRef.current.scrollIntoView()
                break;
            case 'ternos':
                ternosRef.current.scrollIntoView()
                break;
            case 'camisaria':
                camisariaRef.current.scrollIntoView()
                break;
            case 'depoimentos':
                depoimentosRef.current.scrollIntoView()
                break;
            case 'contato':
                contatoRef.current.scrollIntoView()
                break;
            default: break;
        }
    }

    const handleScrollAndClose = (ref) => {
        switch (ref) {
            case 'empresa':
                empresaRef.current.scrollIntoView()
                setIsOpen(!isOpen)
                break;
            case 'ternos':
                ternosRef.current.scrollIntoView()
                setIsOpen(!isOpen)
                break;
            case 'camisaria':
                camisariaRef.current.scrollIntoView()
                setIsOpen(!isOpen)
                break;
            case 'depoimentos':
                depoimentosRef.current.scrollIntoView()
                setIsOpen(!isOpen)
                break;
            case 'contato':
                contatoRef.current.scrollIntoView()
                setIsOpen(!isOpen)
                break;
            default: break;
        }
    }

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className={`flex justify-between px-10 py-5 ${whiteHeader ? `bg-white` : `linear-bg`} text-gray font-lato fixed w-screen drop-shadow top-0 left-0 right-0 z-20`}>
            <div className="justify-center">
                <img src={whiteHeader ? './assets/renee-logo-black.png' : './assets/renee-logo-white.png'} alt="Logo da empresa Renee Trajar" />
            </div>
            <img className="md:hidden fixed top-9 right-7" src="./assets/menu.svg" alt="Icone de menu" onClick={handleMenu} ></img>
            <nav className="flex">
                <ul className="hidden md:flex gap-x-10 items-center uppercase text-base">
                    <li className="hover:text-light-blue cursor-pointer" onClick={() => handleScroll('empresa')}>Empresa</li>
                    <li className="hover:text-light-blue cursor-pointer" onClick={() => handleScroll('ternos')}>Ternos</li>
                    <li className="hover:text-light-blue cursor-pointer" onClick={() => handleScroll('camisaria')}>Camisaria</li>
                    <li className="hover:text-light-blue cursor-pointer" onClick={() => handleScroll('depoimentos')}>Depoimentos</li>
                    <li className="hover:text-light-blue cursor-pointer" onClick={() => handleScroll('contato')}>Contato</li>
                </ul>
                <ul className={`${isOpen ? `flex` : `hidden`} flex-col absolute items-center top-0 right-0 min-h-screen bg-blue w-full`}>
                    <li className="cursor-pointer absolute top-5 right-5" onClick={handleMenu}><img src="./assets/close-menu.svg" alt="Icone de X"></img></li>
                    <li className="cursor-pointer mt-12 text-2xl uppercase text-gold font-light mb-10" onClick={() => handleScrollAndClose('empresa')}>Empresa</li>
                    <li className="cursor-pointer text-2xl uppercase text-gold font-light mb-10" onClick={() => handleScrollAndClose('ternos')}>Ternos</li>
                    <li className="cursor-pointer text-2xl uppercase text-gold font-light mb-10" onClick={() => handleScrollAndClose('camisaria')}>Camisaria</li>
                    <li className="cursor-pointer text-2xl uppercase text-gold font-light mb-10" onClick={() => handleScrollAndClose('depoimentos')}>Depoimentos</li>
                    <li className="cursor-pointer text-2xl uppercase text-gold font-light mb-20" onClick={() => handleScrollAndClose('contato')}>Contato</li>
                    <div className="flex flex-col justify-center items-center md:items-start">
                        <div className="mb-5">
                            <p className="uppercase text-light-blue text-lg text-center md:text-left">Telefones</p>
                            <p className="text-gray md:text-left text-center">+55 (11) 3088-0757</p>
                        </div>
                        <div className="md:mb-12 mb-7">
                            <p className="uppercase text-light-blue text-lg md:text-left text-center">E-mail</p>
                            <p className="text-gray md:text-left text-center">renee@reneetrajar.com.br</p>
                        </div>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
