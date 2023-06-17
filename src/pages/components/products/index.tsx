import React, { useState } from "react";
import ProductItem from "./product_item";
import { Titillium_Web } from 'next/font/google'

const titillium = Titillium_Web({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700', '900'],
})

export default function Product() {
    const [start, setStart] = useState(0);
    const products = [
        {
            image: "product_dress1.png",
            valor: "R$ 500,00",
            title: "Faux Suede Mini Skirt",
            description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
            colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]
        },
        {
            image: "product_dress2.png",
            valor: "R$ 320,00",
            title: "Ruched Rose Print Mini Skirt",
            description: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
            colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"]
        },
        {
            image: "product_dress1.png",
            valor: "R$ 500,00",
            title: "Faux Suede Mini Skirt",
            description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
            colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]
        },
        {
            image: "product_dress2.png",
            valor: "R$ 320,00",
            title: "Ruched Rose Print Mini Skirt",
            description: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
            colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"]
        },
        {
            image: "product_dress1.png",
            valor: "R$ 500,00",
            title: "Faux Suede Mini Skirt",
            description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
            colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]
        },
        {
            image: "product_dress2.png",
            valor: "R$ 320,00",
            title: "Ruched Rose Print Mini Skirt",
            description: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
            colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"]
        },
        {
            image: "product_dress1.png",
            valor: "R$ 500,00",
            title: "Faux Suede Mini Skirt",
            description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
            colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]
        },
    ];

    {/* Função para ir para o próximo produto */ }
    const nextProduct = () => {
        setStart(start === products.length - 5 ? 0 : start + 1);
    };

    {/* Função para ir para o produto anterior */ }
    const prevProduct = () => {
        setStart(start === 0 ? products.length - 5 : start - 1);
    };

    return (

        <div className={`w-full ${titillium.className} flex flex-col items-center relative`}>
            <p className="font-bold text-3xl text-[#353535] flex justify-center items-center mt-10 mb-5">As Mais Pedidas</p>

            {/* Rolagem travada para pc */}
            <div className="hidden 2xl:flex justify-around items-center w-[90%] mx-auto">
                {products.slice(start, start + 5).map((product, index) => (
                    <div key={index}>
                        <ProductItem
                            image={product.image}
                            valor={product.valor}
                            title={product.title}
                            description={product.description}
                            colors={product.colors}
                        />
                    </div>
                ))}
                <button onClick={prevProduct} className="absolute left-20  transform -translate-y-1/2 p-4">
                    <img
                        src={'arrow_left_black.png'}
                        alt={`arrow_left`}
                    />
                </button>
                <button onClick={nextProduct} className="absolute right-20 transform -translate-y-1/2 p-4">
                    <img
                        src={'arrow_right_black.png'}
                        alt={`arrow_right`}
                    />
                </button>
            </div>

            {/* Rolagem livre para mobile */}
            <div className="flex flex-col  2xl:hidden w-full">
                <div className="w-full flex justify-between">
                    <div className="flex overflow-x-auto justify-start  items-center w-full 2xl:w-[90%]">
                        {products.map((product, index) => (
                            <div key={index} className="min-w-max m-5">
                                <ProductItem
                                    image={product.image}
                                    valor={product.valor}
                                    title={product.title}
                                    description={product.description}
                                    colors={product.colors}

                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
