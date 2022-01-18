import React, { useState } from 'react'

const Contact = () => {
    const [nome, setNome] = useState('');
    const [mail, setMail] = useState('');
    const [mensagem, setMensagem] = useState('');

    return (
        <div className="flex gap-40 w-full justify-center items-center px-20 sm:gap-20">
            <div>
                <div className="mb-5">
                    <p className="uppercase text-light-blue text-lg">Telefones</p>
                    <p className="text-gray">+55 (11) 3088-0757</p>
                </div>
                <div className="mb-12">
                    <p className="uppercase text-light-blue text-lg">E-mail</p>
                    <p className="text-gray">renee@reneetrajar.com.br</p>
                </div>
                <div>
                    <p className="uppercase text-light-blue text-lg mb-3">Atendimento Personalizado</p>
                    <button className="bg-white border border-light-blue text-light-blue w-full py-2 hover:border-gold hover:text-gold ease-in duration-300">Clique aqui!</button>
                </div>
            </div>
            <form className="flex flex-col justify-center items-center w-full max-w-screen-sm" onSubmit={(e) => {
                e.preventDefault();
                alert("Você clicou em 'Enviar Mensagem'! e teria enviado \nNome: " + nome + "\nE-mail: " + mail + "\nMensagem: " + mensagem);
            }}>
                <input className="border border-light-blue rounded p-2 mb-3 w-full" type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                <input className="border border-light-blue rounded p-2 mb-3 w-full" type="email" placeholder="E-mail" value={mail} onChange={(e) => setMail(e.target.value)}></input>
                <textarea className="border border-light-blue rounded p-2 mb-5 w-full" type="text" placeholder="Mensagem" rows="5" value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
                <input className="bg-blue text-white-one w-full py-3 hover:bg-hover-blue ease-in duration-300 cursor-pointer" type="submit" value="Enviar Mensagem"></input>
            </form>
        </div>
    )
}

export default Contact;
