import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { Titillium_Web, Lato } from 'next/font/google'

const titillium = Titillium_Web({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700', '900'],
})

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

Modal.setAppElement('#__next') // Linha para acessibilidade

export default function ModalCard() {
    {/* Função para criar o modal pop-up */ }
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setIsModalOpen(true);
    }, []);

    return (
        <div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Card Modal"
                className={`${titillium.className} items-center w-[1500px] h-[900px] justify-center outline-none focus:outline-none flex flex-col`}
                overlayClassName="fixed inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">

                <div className='w-[90%] lg:w-[50%] flex justify-end'>
                    <p onClick={() => setIsModalOpen(false)} className={`${lato.className} cursor-pointer`}>FECHAR</p>
                </div>

                <div className='w-[90%] h-[40%]  lg:w-[50%] lg:h-[50%] sm:h-[50%] bg-white relative flex flex-row justify-center'>
                    <img
                        src={'modal_imagem.png'}
                        alt={`Modal Imagem`}
                        className="w-1/2 h-full object-cover hidden xl:flex" />

                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <img
                            src={'email_icon.png'}
                            alt={`Email icon`}
                            className='w-12 h-12' />

                        <p className='text-[14px] my-2 text-[#464B54]'>BEM VINDO À MAEZTRA</p>

                        <div className={`${lato.className} flex flex-col justify-center items-center`}>

                            <p className='text-[22px] text-[#787D83]'>Receba em Primeira mão</p>
                            <p className='text-[22px] text-[#787D83] font-black'>desconto e ofertas exclusivas</p>
                            <div className={`${titillium.className} w-80`}>
                                <input placeholder='Digite seu e-mail' className='h-10 mt-6 rounded-[10px] border-[#C4C4C4] border placeholder:text-[#787D83]
                            text-[#787D83] p-4 text-[14px] w-full focus:outline-none'></input>
                            </div>

                            <div className={`${titillium.className} flex w-full`}>
                                <div onClick={() => setIsModalOpen(false)}
                                    className='h-10 mt-3rounded-[10px] bg-[#FAA500] w-full text-[#FFFFFF] p-4 text-[14px] font-bold
                                    flex justify-center items-center cursor-pointer'>
                                    <p>ENVIAR</p>
                                    <img
                                        src={'plane_icon.png'}
                                        alt={`Plane icon`}
                                        className='ml-2'/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
