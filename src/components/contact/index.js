import React, { useState } from 'react'
import MessageSend from '../messageSend';

const Contact = () => {
    const [nome, setNome] = useState('');
    const [mail, setMail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [isSubmited, setIsSubmited] = useState(false)
    const [info, setInfo] = useState(false)

    return (
        <div className="flex md:flex-row flex-col-reverse md:gap-40 gap-10 w-full justify-center items-center px-5 md:px-20 sm:gap-20">
            <div className="flex flex-col justify-center items-center md:items-start">
                <div className="mb-5">
                    <p className="uppercase text-light-blue text-lg text-center md:text-left">Telefones</p>
                    <p className="text-gray md:text-left text-center">+55 (11) 3088-0757</p>
                </div>
                <div className="md:mb-12 mb-7">
                    <p className="uppercase text-light-blue text-lg md:text-left text-center">E-mail</p>
                    <p className="text-gray md:text-left text-center">renee@reneetrajar.com.br</p>
                </div>
                <div>
                    <p className="uppercase text-light-blue text-lg mb-3 md:text-left text-center">Atendimento Personalizado</p>
                    <button className="bg-white border border-light-blue text-light-blue w-full py-2 hover:border-gold hover:text-gold ease-in duration-300">Clique aqui!</button>
                </div>
            </div>
            <form className="flex flex-col justify-center items-center w-full max-w-screen-sm" onSubmit={(e) => {
                e.preventDefault();
                if (nome !== "" && mail !== "" && mensagem !== "") {
                    setInfo(true)
                    setIsSubmited(true)
                    setTimeout(() => {
                        setIsSubmited(false)
                    }, 2000);
                } else {
                    setIsSubmited(true)
                    setTimeout(() => {
                        setIsSubmited(false)
                    }, 2000);
                }

            }}>
                <input className="border border-light-blue rounded p-2 mb-3 w-full" type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                <input className="border border-light-blue rounded p-2 mb-3 w-full" type="email" placeholder="E-mail" value={mail} onChange={(e) => setMail(e.target.value)}></input>
                <textarea className="border border-light-blue rounded p-2 mb-5 w-full" type="text" placeholder="Mensagem" rows="5" value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
                <input className="bg-blue text-white-one w-full py-3 hover:bg-hover-blue ease-in duration-300 cursor-pointer" type="submit" value="Enviar Mensagem"></input>
                <MessageSend isSuccessfull={info} isVisible={isSubmited} />
            </form>
        </div>
    )
}

export default Contact;
