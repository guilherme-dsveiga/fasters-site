import React from 'react';
import './styles.css';

const Camisaria = ({ reverse, title, subtitle, buttonTitle, imgSrc, imgAlt, items }) => {
    return (
        <div className={`flex ${reverse === true ? `flex-row-reverse` : `flex-row`} pb-20 px-20 justify-center items-center`}>
            <div>
                <img src={`${imgSrc}`} alt={`${imgAlt}`}></img>
            </div>
            <div className={`xl:p-20 md:p-7 border-t border-b ${reverse === true ? `border-l` : `border-r`} border-light-gray`}>
                <h2 className="text-6xl text-blue uppercase font-light font-comorant">{title}</h2>
                <div className="flex gap-2 items-center mb-5">
                    <div className="dash-prop"></div>
                    <p className="text-light-gray uppercase">{subtitle}</p>
                </div>
                <ul className="columns-2 list-disc text-dark-gray font-comorant text-lg mb-7 pl-5">
                    {items.map((item, key) => (
                        <li key={key}>{item}</li>
                    ))}
                </ul>
                <button className="bg-blue hover:bg-hover-blue font-light text-white-one px-10 py-2 ease-in duration-300">{buttonTitle}</button>
            </div>
        </div>
    )
}

export default Camisaria;
