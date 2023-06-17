import Partners from "./partners";
import Reasons from "./reasons";
import { Titillium_Web  } from 'next/font/google'

const titillium = Titillium_Web({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700', '900'],
})

export default function Rollers() {
    return (
        <div className={`w-full ${titillium.className}`}>

            {/* Rolagem travada para pc */}
            <div className="hidden xl:flex flex-col w-full">

                {/* Motivos para comprar */}
                <p className="font-bold text-base text-black flex justify-center items-center mt-5">Por que comprar na Maeztra?</p>
                <div className="flex justify-center items-center h-32 w-[90%] mx-auto">
                    <Reasons image={"world_icon.png"} title="Produtos importados" subtitle="Produtos de Alta Qualidade" />
                    <Reasons image={"import_icon.png"} title="Estoque no Brazil" subtitle="Produtos mais perto de você!" />
                    <Reasons image={"box_icon.png"} title="Trocas Garantidas" subtitle="Trocas em até 48 horas, veja as regras" />
                    <Reasons image={"sale_icon.png"} title="Ganhe 5% off" subtitle="Pagando à vista no Cartão" />
                    <Reasons image={"truck_icon.png"} title="Frete Grátis" subtitle="Em compras acima de R$ 499,00" />
                </div>

                {/* Parceiros */}
                <p className="font-bold text-3xl text-[#353535] flex justify-center items-center mt-10">Marcas Parceiras</p>
                <div className="flex justify-center items-center h-32 w-[90%] mx-auto">
                    <Partners image={"comma_logo.png"} />
                    <Partners image={"melissa_logo.png"} />
                    <Partners image={"forever_logo.png"} />
                    <Partners image={"zara_logo.png"} />
                    <Partners image={"taylor_logo.png"} />
                </div>

            </div>

            {/* Rolagem livre para mobile */}
            <div className="flex flex-col xl:hidden w-full">
                <div className="w-full">

                    {/* Motivos para comprar */}
                    <p className="font-bold text-base text-black flex justify-center items-center mt-5">Por que comprar na Maeztra?</p>
                    <div className="flex overflow-x-auto justify-start items-center h-32 w-full xl:w-[90%] mx-auto">
                        <div className="min-w-max"><Reasons image={"world_icon.png"} title="Produtos importados" subtitle="Produtos de Alta Qualidade" /></div>
                        <div className="min-w-max"><Reasons image={"import_icon.png"} title="Estoque no Brazil" subtitle="Produtos mais perto de você!" /></div>
                        <div className="min-w-max"><Reasons image={"box_icon.png"} title="Trocas Garantidas" subtitle="Trocas em até 48 horas, veja as regras" /></div>
                        <div className="min-w-max"><Reasons image={"sale_icon.png"} title="Ganhe 5% off" subtitle="Pagando à vista no Cartão" /></div>
                        <div className="min-w-max"><Reasons image={"truck_icon.png"} title="Frete Grátis" subtitle="Em compras acima de R$ 499,00" /></div>
                    </div>

                    {/* Parceiros */}
                    <p className="font-bold text-3xl text-[#353535] flex justify-center items-center mt-10">Marcas Parceiras</p>
                    <div className="flex overflow-x-auto justify-start items-center h-32 w-full xl:w-[90%] mx-auto">
                        <div className="min-w-max"><Partners image={"comma_logo.png"} /></div>
                        <div className="min-w-max"><Partners image={"melissa_logo.png"} /></div>
                        <div className="min-w-max"><Partners image={"forever_logo.png"} /></div>
                        <div className="min-w-max"><Partners image={"zara_logo.png"} /></div>
                        <div className="min-w-max"><Partners image={"taylor_logo.png"} /></div>
                    </div>

                </div>
            </div>
            
        </div>
    );
}
