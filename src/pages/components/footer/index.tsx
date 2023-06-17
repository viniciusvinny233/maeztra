import { useState } from 'react';
import { Open_Sans, Titillium_Web } from 'next/font/google';

const open = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
});

const titillium = Titillium_Web({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700', '900'],
});

type MenuListProps = {
    title: string;
    items: string[];
};

const MenuList = ({ title, items }: MenuListProps) => {


    {/* Função para criar o menu acordeão */}
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={() => setIsOpen(!isOpen)} className='mt-4 cursor-pointer w-full flex flex-col justify-between'>
            
            <div className='flex w-full justify-between'>
                <p className='font-bold text-[#353535] text-[16px]'>{title}</p>
                <p className='font-bold text-[#353535] text-[16px]'>+</p>
            </div>

            <div className='flex flex-col items-start justify-start '>
                {isOpen && items.map((item, index) => (
                    <p key={index} className='font-normal mt-7 text-black text-[12px]'>{item}</p>
                ))}
            </div>

        </div>
    )
}

export default function Footer() {
    const menus = [
        {
            title: 'Informações',
            items: ['Quem Somos', 'Prazo de Envio', 'Trocas e Devoluções', 'Promoções e Cupons']
        },
        {
            title: 'Minha Conta',
            items: ['Minha Conta', 'Meus Pedidos', 'Cadastre-se']
        },
        {
            title: 'Onde nos Encontrar',
            items: ['Lojas', 'Endereço']
        },
    ];

    return (
        <div className="w-full ">
            <div className={`w-full ${titillium.className}  bg-[#FAFAFA] flex justify-center items-start mb-4`}>
                
                {/* Menu acordeão para mobile */}
                <div className='w-[80%] flex md:hidden flex-col justify-around'>
                    {menus.map((menu, index) => <MenuList key={index} title={menu.title} items={menu.items} />)}
                </div>

                <div className={`w-full ${titillium.className} hidden md:flex h-72 bg-[#FAFAFA] justify-center items-start`}>
                    <div className='w-[80%] flex justify-around'>
                        
                        <div className='w-[12%] mt-4 py-4'>
                            <p className='cursor-pointer font-bold text-[#353535] text-[16px]'>Informações</p>
                            <p className='cursor-pointer font-normal mt-7 text-black text-[12px]'>Quem Somos</p>
                            <p className='cursor-pointer font-normal mt-7 text-black text-[12px]'>Prazo de Envio</p>
                            <p className='cursor-pointer font-normal mt-7 text-black text-[12px]'>Trocas e Devoluções</p>
                            <p className='cursor-pointer font-normal mt-7 text-black text-[12px]'>Promoções e Cupons</p>
                        </div>
                        
                        <div className='w-[12%] mt-4 py-4'>
                            <p className='cursor-pointer font-bold text-[#353535] text-[16px]'>Minha Conta</p>
                            <p className='cursor-pointer font-normal mt-7 text-black text-[12px]'>Minha Conta</p>
                            <p className='cursor-pointer font-normal mt-7 text-black text-[12px]'>Meus Pedidos</p>
                            <p className='cursor-pointer font-normal mt-7 text-black text-[12px]'>Cadastre-se</p>
                        </div>
                        
                        <div className='w-[12%] mt-4 py-4'>
                            <p className='cursor-pointer font-bold text-[#353535] text-[16px]'>Onde nos Encontrar</p>
                            <p className='cursor-pointer font-normal mt-7 text-black text-[12px]'>Lojas</p>
                            <p className='cursor-pointer font-normal mt-7 text-black text-[12px]'>Endereço</p>
                        </div>

                    </div>
                </div>

            </div>

            {/* Footer final */}
            <div className={`bg-[#353535] w-full justify-around ${open.className} flex items-center flex-col md:flex-row`}>
                
                <div className="w-[60%] xl:w-[15%] md:w-[20%] h-12 flex justify-around items-center my-3">
                    <img
                        src={"facebook_icon.png"}
                        alt="Facebook Logo"
                        className="w-[32px] h-[32px] cursor-pointer"/>
                    <img
                        src={"linkedin_icon.png"}
                        alt="Linkedin Logo"
                        className="w-[32px] h-[32px] cursor-pointer"/>
                    <img
                        src={"instagram_icon.png"}
                        alt="Instagram Logo"
                        className="w-[32px] h-[32px] cursor-pointer"/>
                    <img
                        src={"youtube_icon.png"}
                        alt="Youtube Logo"
                        className="w-[32px] h-[22px] cursor-pointer"/>
                </div>

                <div className="w-[60%] xl:w-[15%] md:w-[20%] h-12 flex justify-around items-center my-3">
                    <img
                        src={"visa_icon.png"}
                        alt="Visa Logo"
                        className="w-[32px] h-[25px] cursor-pointer"/>
                    <img
                        src={"mastercard_icon.png"}
                        alt="Mastercard Logo"
                        className="w-[32px] h-[25px] cursor-pointer"/>
                    <img
                        src={"visa_icon.png"}
                        alt="Visa Logo"
                        className="w-[32px] h-[25px] cursor-pointer"/>
                    <img
                        src={"mastercard_icon.png"}
                        alt="Mastercard Logo"
                        className="w-[32px] h-[25px] cursor-pointer"/>
                </div>

                <div className="w-[60%] xl:w-[15%] md:w-[20%] h-12 flex justify-around items-center my-3">
                    
                    <div>
                        <p className="font-normal text-[10px] mb-2">Powered by</p>
                        <img
                            src={"vtex_icon.png"}
                            alt="VTEX Logo"
                            className="w-[68px] h-[25px] cursor-pointer"/>
                    </div>
                    <div>
                        <p className="font-normal text-[10px] mb-2">Developed by</p>
                        <img
                            src={"maeztra_footer_logo.png"}
                            alt="Maeztra Logo"
                            className="w-[120px] h-[28px] cursor-pointer"/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
