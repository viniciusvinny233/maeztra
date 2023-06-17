import { useState } from 'react';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const images = ["imagem_carrossel.png", "imagem_carrossel.png", "imagem_carrossel.png", "imagem_carrossel.png", "imagem_carrossel.png"]; // Substitua com seus próprios caminhos de imagem
const imagesSmall = ["imagem_carrossel_small.png", "imagem_carrossel_small.png", "imagem_carrossel_small.png", "imagem_carrossel_small.png", "imagem_carrossel_small.png"];

export default function Carrossel() {
    const [activeImage, setActiveImage] = useState(0); // Index da imagem ativa

    {/* Função para ir para a próxima */}
    const nextImage = () => {
        setActiveImage((previous) => (previous + 1) % images.length);
    };

    {/* Função para ir para a imagem anterior */}
    const prevImage = () => {
        setActiveImage((previous) => (previous - 1 + images.length) % images.length);
    };

    return (
        <div className={`w-full ${montserrat.className} h-[350px] sm:h-[600px] relative`}>

            {/* Carrossel para pc */}
            <div className='hidden sm:flex'>
                {images.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        alt={`Slide ${index}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${index === activeImage ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>

            {/* Carrossel para mobile */}
            <div className='flex sm:hidden'>
                {imagesSmall.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        alt={`Slide ${index}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${index === activeImage ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>

            <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 sm:p-32">
                <img
                    src={'arrow_left_grey.png'}
                    alt={`arrow_left`}
                />
            </button>

            {/* Texto dentro do Carrossel */}
            <div className='absolute w-[60%] sm:w-[28%] h-42 sm:h-64 left-20 top-[43%] transform -translate-y-1/2 sm:left-60'>
                <p className='text-white text-[30px] w-[90%] font-bold md:text-[40px] sm:text-[30px] sm:w-full'>Promoções de Outono</p>
                <p className='text-white text-base font-light mt-10 sm:text-xl w-[90%]'>Confiras os melhores looks para combinar com você nesse Outono</p>
                <button className="bg-[#FAA500] w-[80px] h-[36px] sm:w-[128px] sm:h-[48px] mt-5 rounded-[8px] font-bold text-[14px] sm:text-[16px]">Conferir</button>
            </div>

            <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 sm:p-32">
                <img
                    src={'arrow_right_grey.png'}
                    alt={`arrow_right`}
                />
            </button>
            
            {/* Controller do carrossel */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 space-x-4 flex mb-6">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`h-3 w-3 sm:w-4 sm:h-4 rounded-full border-2 border-yellow-500 ${index === activeImage ? 'bg-yellow-500' : 'bg-transparent'}`}
                    />
                ))}
            </div>
        </div>
    );
}
