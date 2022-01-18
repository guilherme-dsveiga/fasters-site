import React, { useRef } from 'react'
import Camisaria from '../../components/camisaria';
import Contact from '../../components/contact';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Testimonials from '../../components/testimonials';
import './styles.css';

const Home = () => {
    const camisariaItems = [
        '100% Algodão',
        'Monograma',
        'Slim',
        'Nacionais e Importadas',
        'Tradicionais e Esportivas',
        'Casamentos'
    ]

    const alfaiatariaItems = [
        'Fio Super 120 e 130',
        'Lã fria Australiana',
        'Botões Importados',
        'Ternos e Calças',
        'Paletós e Smokings',
        'Sociais e Esportivos'
    ]

    const testimonials = {
        0: {
            paragraph: "“Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de meu pai, que já tem uma história de décadas com o querido Renee. O excelente atendimento antes e pós venda e a alta qualidade dos materiais usados colocam a Renee Trajar em um patamar acima dos demais do ramo.”",
            name: "William H. M. Garey",
            subtitle: "Advogado | Nelson Garey Advogados Associados",
            picture: "./assets/william.png"
        },
        1: {
            paragraph: "“Há mais de 10 anos sou cliente da Renee Trajar. A qualidade, caimento e possibilidade de customização das roupas, aliados ao excelente atendimento e prazo de entrega são fatores decisivos para mim.”",
            name: "Josimar Henrique da Silva",
            subtitle: "Diretor Presidente | Grupo Hebron",
            picture: "./assets/josimar.png"
        },
        2: {
            paragraph: "“Seu corte tanto de camisas, bem como de ternos são impecáveis, muitos dos meus amigos tem elogiado a vestimenta. Recomendo para quem gosta de perfeição. Estamos nos servindo do trabalho do Renee Trajar há mais de vinte anos.”",
            name: "Domingos Orestes Chiomento",
            subtitle: "DOC Contabilidade Empresarial",
            picture: "./assets/domingos.png"
        },
        3: {
            paragraph: "“Tenho a honra de afirmar que enquanto nossas vidas perdurarem o meu conceito é sempre melhor em relação ao Renee Trajar, sua pessoa, ao profissional competente e idôneo, sempre pontual, atencioso e preocupado em atender da melhor maneira os anseios de seus clientes, incluindo este signatário.”",
            name: "José Mauro Marques",
            subtitle: "Advogado",
            picture: "./assets/jose.png"
        },
        4: {
            paragraph: "“Conheço o excelente e qualificado trabalho do Renee Trajar e sua equipe há décadas. Para camisas e ternos, o Renee é imbatível, sempre com preços justos, produtos de excelente qualidade e especialmente tudo é feito com muito cuidado e qualidade. Cumpre os prazos com atendimento de alto nível. O Renee trabalha com perfeição nos detalhes.”",
            name: "Custódio Pereira",
            subtitle: "Membro do CONSOCIAL - Conselho Superior de Responsabilidade Social da FIESP-SP",
            picture: "./assets/custodio.png"
        }
    }

    const empresaRef = useRef(null);
    const ternosRef = useRef(null);
    const camisariaRef = useRef(null);
    const depoimentosRef = useRef(null);
    const contatoRef = useRef(null);

    return (
        <div className="font-lato">
            <div className="header-wrapper flex items-center relative z-40 ">
                <Header empresaRef={empresaRef} ternosRef={ternosRef} camisariaRef={camisariaRef} depoimentosRef={depoimentosRef} contatoRef={contatoRef}/>
                <div className="pl-20">
                    <div className=" pb-10 pt-20">
                        <h4 className="font-playfair italic text-gold text-4xl">Elegante é ter um </h4>
                        <h1 className="font-playfair uppercase text-blue text-8xl">Alfaiate</h1>
                        <h4 className="font-playfair italic text-gold text-right text-4xl">pra chamar de seu.</h4>
                    </div>
                    <div className="pt-3">
                        <p className="font-lato font-light uppercase text-white text-2xl">
                            Compre Hoje.<span className="font-normal">Pague em até 3x<br /> com 12% de desconto</span> e tenha<br /> 10 meses para confeccionar!
                        </p>
                    </div>
                    <div className="mt-7">
                        <button className="text-lg font-light uppercase text-white px-10 py-3 bg-blue border border-transparent hover:border hover:border-gold hover:bg-transparent ease-in duration-300">Faça já um orçamento</button>
                    </div>
                </div>
                <a className="absolute right-5 -bottom-12 z-10" href="/"><img src="./assets/whatsapp-icon.png" alt="Icone do Whatsapp" /></a>
            </div>
            <main>
                <section className="flex px-20 py-10 gap-20 relative " ref={empresaRef}>
                    <div className="w-full max-w-sm">
                        <img src="./assets/renee-picture.png" alt="Foto de um homem com fita métrica em volta do ombro" />
                    </div>
                    <div>
                        <div className="w-fit flex flex-col justify-center items-center mb-10" >
                            <h3 className="text-4xl font-comorant font-light text-blue">Renee Trajar</h3>
                            <span className="line-blue" />
                        </div>
                        <p className="font-lato text-lg text-black-one mb-5">
                            Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, possuímos profissionais experientes e altamente qualificados.<br /><br />
                            Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através das medidas tiradas pelo próprio Sr. Renee, no escritório ou residência do cliente.
                            <br /> <br />
                            <span className="font-comorant font-light italic text-xl text-light-blue">
                                “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação<br /> ao usar nossos produtos, aliado a um relacionamento franco e honesto,<br /> valorizando o ser humano.”
                            </span>
                        </p>
                        <div className="mt-7">
                            <button className="text-lg font-light text-white-one px-10 py-3 bg-blue hover:bg-hover-blue ease-in duration-300">Agende uma visita!</button>
                        </div>
                        <div className="absolute quotes flex flex-col items-center">
                            <img className="mb-2" src="./assets/quotation.png" alt="Aspas" />
                            <span className="text-dark-gray font-comorant text-lg">Renee Trajar</span>
                        </div>
                    </div>
                </section>
                <section className="flex relative">
                    <div className="tailor-bg flex justify-center items-center">
                        <div className="flex flex-col">
                            <p className="text-center text-dark-gray text-xl mb-7">“Faço roupas com o Renee Trajar há mais de duas décadas, o<br /> serviço é impecável em todos os detalhes, desde a costura ao<br /> caimento. O Renee tem uma equipe de mestre!”</p>
                            <h5 className="text-center text-blue font-comorant italic text-2xl">Nelson Garey</h5>
                            <p className="text-center text-gold text-lg">Advogado | Nelson Garey Advogados Associados</p>
                        </div>
                        <img src="./assets/tipped-men.png" alt="Homem encostado no corrimão de uma escada"></img>
                    </div>
                </section>
                <div className="flex py-10 justify-center items-baseline gap-12">
                    <div className="flex flex-col justify-center items-center ">
                        <img className="w-12 mb-2" src="./assets/qualidade.svg" alt="Icone de maquina de costura" />
                        <h5 className="text-light-blue font-comorant uppercase text-2xl mb-2">Qualidade</h5>
                        <p className="text-gray text-center">Camisaria e Alfaiataria 100% artesanal.</p>
                    </div>
                    <div className="vert-line self-end"></div>
                    <div className="flex flex-col justify-center items-center ">
                        <img className="w-12 mb-2" src="./assets/confianca.svg" alt="Icone de medalha" />
                        <h5 className="text-light-blue font-comorant uppercase text-2xl mb-2">Confiança</h5>
                        <p className="text-gray text-center">Atendimento personalizado no escritório ou residência.</p>
                    </div>
                    <div className="vert-line self-end"></div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-12 mb-2" src="./assets/experiencia.svg" alt="Icone de um selo" />
                        <h5 className="text-light-blue font-comorant uppercase text-2xl mb-2">Experiência</h5>
                        <p className="text-gray text-center">Tradição e modernidade proporcionando elegância.</p>
                    </div>
                </div>
                <section className="condition-bg flex p-7 justify-center items-center gap-12" ref={ternosRef}>
                    <div className="flex flex-col">
                        <h2 className="text-6xl text-gold drop-shadow font-comorant uppercase mb-10">Condição Imperdível</h2>
                        <p className="text-2xl text-gold drop-shadow font-comorant italic text-left mb-5">Compre hoje e garanta:</p>
                        <ul className="text-2xl text-light-gray font-light dash mb-10">
                            <li className="mb-5 pl-2">12% de desconto e pagamento em até <span className="font-normal">3x sem juros</span>;</li>
                            <li className="mb-5 pl-2">Até <span className="font-normal">10 meses</span> para confeccionar sua roupa. Não se preocupe se<br /> suas medidas aumentaram ou diminuíram, estará sempre elegante;</li>
                            <li className="mb-5 pl-2">Condição muito especial por <span className="font-normal">tempo limitado</span>;</li>
                            <li className="mb-5 pl-2">Poder presentear alguém com uma roupa de alta costura, <span className="font-normal">exclusiva</span>.</li>
                        </ul>
                        <button className="w-fit text-lg font-light text-white px-10 py-3 bg-gold hover:bg-dark-gray ease-in duration-300">Garanta essa condição especial!</button>
                    </div>
                    <div>
                        <img src="./assets/suit-men.png" alt="Homem de térno"></img>
                    </div>
                </section>
                <section className="pt-20 pb-10" ref={camisariaRef}>
                    <Camisaria reverse={false} title="Camisaria" subtitle="confeccionadas artesanalmente" buttonTitle="Quero um orçamento" imgSrc="./assets/camisaria.png" imgAlt="Homem vestindo camisa social mexendo na gravata" items={camisariaItems} />
                    <Camisaria reverse={true} title="Alfaiateria" subtitle="totalmente feito a mão sob medida" buttonTitle="Quero um orçamento" imgSrc="./assets/alfaiateria.png" imgAlt="Terno com botões" items={alfaiatariaItems} />
                </section>
                <section className="testimonials-bg flex flex-col justify-center items-center py-12" ref={depoimentosRef}>
                    <h2 className="text-white-two font-comorant text-4xl font-light mb-10">Depoimentos</h2>
                    <Testimonials testimonials={testimonials} />
                </section>
                <section className="flex flex-col justify-center items-center py-10" ref={contatoRef} >
                    <h2 className="text-light-blue font-comorant text-4xl font-light">Contato</h2>
                    <span className="line-blue mb-10" />
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home;
