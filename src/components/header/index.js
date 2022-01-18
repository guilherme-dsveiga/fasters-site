import React, { useEffect, useState } from 'react';
import './styles.css';

const Header = ({ empresaRef, ternosRef, camisariaRef, depoimentosRef, contatoRef }) => {
    const [whiteHeader, setWhiteHeader] = useState(false);

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

    return (
        <header className={`flex justify-between px-10 py-5 ${whiteHeader ? `bg-white` : `linear-bg`} text-gray font-lato fixed w-screen drop-shadow top-0 left-0 right-0 z-20`}>
            <div>
                <img src={whiteHeader ? './assets/renee-logo-black.png' : './assets/renee-logo-white.png'} alt="Logo da empresa Renee Trajar" />
            </div>
            <nav className="flex">
                <ul className="flex gap-x-10 items-center uppercase text-base">
                    <li className="hover:text-light-blue cursor-pointer" onClick={() => handleScroll('empresa')}>Empresa</li>
                    <li className="hover:text-light-blue cursor-pointer" onClick={() => handleScroll('ternos')}>Ternos</li>
                    <li className="hover:text-light-blue cursor-pointer" onClick={() => handleScroll('camisaria')}>Camisaria</li>
                    <li className="hover:text-light-blue cursor-pointer" onClick={() => handleScroll('depoimentos')}>Depoimentos</li>
                    <li className="hover:text-light-blue cursor-pointer" onClick={() => handleScroll('contato')}>Contato</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
