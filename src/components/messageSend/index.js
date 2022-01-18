import React, { useEffect, useState } from 'react';
import './styles.css'

const MessageSend = ({ isSuccessfull, isVisible }) => {
    const [drop, setDrop] = useState(false);

    useEffect(() => {
        setDrop(true)
    }, [])

    return (
        <div className={`${isVisible ? 'block' : 'hidden'}`}>
            <div className={`flex flex-col md:p-10 bg-white-two drop-shadow-lg w-[250px] py-5 rounded fixed top-0 positioning z-50 justify-center text-center items-center ease-in duration-300 ${drop ? `mt-0` : `-mt-[5000px]`} `}>
                {isSuccessfull ?
                    <>
                        <img className="w-12 mb-3" src="./assets/success.png" alt="Icone de sucesso"></img>
                        <p className="text-2xl">Mensagem enviada com sucesso!</p>
                    </> :
                    <>
                        <img className="w-12 mb-3"  src="./assets/error.png" alt="Icone de erro"></img>
                        <p className="text-2xl">Erro ao enviar mensagem</p>
                    </>
                }
            </div>
        </div>
    )
}

export default MessageSend;
