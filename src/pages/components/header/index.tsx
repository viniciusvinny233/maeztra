import { Titillium_Web } from 'next/font/google'

const titillium = Titillium_Web({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700', '900'],
})

export default function Header() {
    return (
        <div className={`w-full ${titillium.className}`}>
            {/* Barra no topo do Header */}
            <div className="flex bg-[#353535] w-full h-6 text-[12px] justify-center items-center">
                <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
            </div>
            {/* Header para mobile*/}
            <div className="flex justify-between sm:justify-around w-full h-[88px] items-center shadow-md">
                <div className="flex items-center justify-start w-52 sm:justify-between">

                    <button>
                        <img
                            src="menu_icon.png"
                            alt="Shop Icon"
                            className={`
                    w-[24px] h-[24px] ml-5 sm:hidden `}
                        />

                    </button>
                    <div className="ml-8 sm:ml-14">
                        <img
                            src="logo-maeztra-novo.png"
                            alt="Logo"
                            className={`
                        w-28 h-[14px]
                        sm:w-36 sm:h-[18px]`}
                        />
                    </div>

                </div>

                <div className="hidden 2xl:w-[787px] xl:flex bg-[#EFEFEF] h-[40px] w-[600px] rounded-[10px] lg:w-">
                    <input placeholder="O Que Você Busca?" className="w-[565px] h-[40px] bg-[#EFEFEF] 
                    rounded-[10px] placeholder:text-[#353535] text-black ml-6 mr-20 text-[12px]
                    focus:outline-none"></input>
                    <div>
                        <button className="bg-[#FAA500] w-[119px] h-[40px] rounded-[8px] text-[14px]">Buscar</button>
                    </div>
                </div>

                <div className="flex h-12  w-1/3 justify-around items-center sm:w-[50%] lg:w-[29%]">

                    <button>
                        <div className="hidden sm:flex items-center p-3">
                            <img
                                src="profile_icon.png"
                                alt="Profile Icon"
                                className={`w-[14px] h-[16px]`}
                            />
                            <p className="text-black text-sm ml-2">Minha Conta</p>
                        </div>
                    </button>

                    <button>
                        <div className="hidden sm:flex items-center p-3">
                            <img
                                src="fav_icon.png"
                                alt="Fav Icon"
                                className={`w-[18.28px] h-[16px]`}
                            />
                            <p className="text-black text-sm ml-2 ">Minha Conta</p>
                        </div>
                    </button>

                    <button>
                        <div className="hidden sm:flex items-center border p-3 border-[#FAA500] rounded-xl">
                            <img
                                src="shop_icon.png"
                                alt="Shop Icon"
                                className={`w-[14.38px] h-[16px]`}
                            />
                            <p className="text-black text-sm ml-2">Meu Carrinho</p>
                        </div>
                    </button>

                    <div className="flex justify-between items-center w-20 mr-4 sm:hidden ">
                        <button>
                            <img
                                src="buscar_icon.png"
                                alt="Shop Icon"
                                className={`w-[24px] h-[24px]`}
                            />
                        </button>
                        <button>
                            <img
                                src="shop_mobile_icon.png"
                                alt="Shop Icon"
                                className={`w-[20.77px] h-[24px]`}
                            />
                        </button>
                    </div>

                </div>

            </div>

            {/* Header para pc*/}
            <div className="hidden lg:flex bg-[#FFFFFF] w-full h-9 items-center justify-center mt-2 pb-2">
                <div className="flex w-2/3 justify-around items-center text-black text-[14px]">

                    <div className="flex items-center">
                        <img
                            src="dress_icon.png"
                            alt="Dress Icon"
                            className={`w-[12.5px] h-[15px]`}/>
                        <p className="text-[#FAA500] font-bold ml-[10px] cursor-pointer">Novidades</p>
                    </div>

                    <p className='cursor-pointer'>Vestidos</p>
                    <p className='cursor-pointer'>Roupas</p>
                    <p className='cursor-pointer'>Sapatos</p>
                    <p className='cursor-pointer'>Lingerie</p>
                    <p className='cursor-pointer'>Acessórios</p>
                    <p className='cursor-pointer'>OUTLET</p>
                </div>

            </div>
        </div>
    )
}