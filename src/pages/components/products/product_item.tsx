import { useState } from 'react';

interface Item {
    image?: any
    valor?: any
    title?: any
    description?: any
    colors?: string[]
}

export default function ProductItem(props: Item) {
    const [activeColorIndex, setActiveColorIndex] = useState(0);

    return (
        <div className="w-72  flex justify-start items-center flex-col">
            <div className="bg-[#efefef] w-72 h-[380px] flex items-center">
                <img
                    src={props.image}
                    alt="Product Image"
                    className="h-full"
                />
            </div>
            <div className="flex w-[88%]">
                {props.colors?.map((color, index) => (
                    <div 
                        key={index} 
                        className={`w-[27px] h-[27px] m-2 cursor-pointer rounded ${activeColorIndex === index ? 'border-[1px] border-[#353535]' : ''}`} 
                        style={{ backgroundColor: color }} 
                        onClick={() => setActiveColorIndex(index)}
                    />
                ))}
            </div>
            <div className="w-full flex justify-center">
                <div className=" max-w-[82%]">
                    <p className="text-[#353535] text-[20px] font-bold">{props.valor}</p>
                    <p className="text-black text-[16px] font-normal">{props.title}</p>
                    <p className="text-black text-[12px] font-normal opacity-50">{props.description}</p>
                    <button className="bg-[#FAA500] w-full h-[36px] rounded-[4px] font-normal text-[16px] mt-4">Adicionar</button>
                </div>
            </div>
        </div>
    );
}
