import React, { useState } from 'react'

const Testimonials = ({ testimonials }) => {
    const testimonialKeys = Object.keys(testimonials)
    const length = testimonialKeys.length;
    const [index, setIndex] = useState(0);

    const handleIndex = (op) => {
        switch (op) {
            case '-':
                if (index === 0) {
                    setIndex(length - 1)
                } else {
                    setIndex(index - 1);
                }
                break;
            case '+':
                if (index >= length - 1) {
                    setIndex(0)
                } else {
                    setIndex(index + 1);
                }
                break;
            default: break;
        }
    }

    const handleCircleClick = (value) => {
        console.log(value)
        setIndex(value)
    }

    return (
        <>
            <div className="flex justify-center items-center gap-20 mb-5 ease-in duration-300">
                <div className="cursor-pointer" onClick={() => handleIndex('-')}>
                    <img src="./assets/left-arrow.svg" alt="Seta para a esquerda"></img>
                </div>
                <div className="flex flex-col justify-center items-center max-w-screen-md">
                    <div className="mb-5">
                        <img className="border border-2 rounded-full border-gold" src={testimonials[index].picture} alt="Foto de perfil do prestador de depoimento"></img>
                    </div>
                    <p className="text-light-gray italic font-comorant font-light text-2xl text-center mb-7">{testimonials[index].paragraph}</p>
                    <p className="text-gold font-comorant text-xl mb-1">{testimonials[index].name}</p>
                    <p className="text-gray font-comorant">{testimonials[index].subtitle}</p>
                </div>
                <div className="cursor-pointer" onClick={() => handleIndex('+')}>
                    <img src="./assets/right-arrow.svg" alt="Seta para a direita"></img>
                </div>
            </div>
            <div className="flex gap-3">
                {testimonialKeys.map((key, value) => (
                    <div className={`circle cursor-pointer${value === index ? ` active` : ""}`} key={key} onClick={() => handleCircleClick(value)}>
                    </div>

                ))}

            </div>
        </>
    )
}

export default Testimonials;