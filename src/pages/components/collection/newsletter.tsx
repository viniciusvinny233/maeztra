export default function Newsletter() {
    return (
        <div className="w-full flex h-32 justify-center items-center border-y-4 border-[#EFEFEF] bg-[#FAFAFA]">
            <div className="w-[100%]  xl:w-[70%] flex flex-col justify-around xl:flex-row items-center">
                <p className="font-bold text-[24px] text-[#353535] lg:text-black">Receba Nossa Newsletter</p>
                <div className="hidden xl:flex bg-[#FFFFFF] h-[40px] w-[600px] rounded-[4px] items-center">
                    <div className="border border-black rounded-[4px] flex items-center h-[40px]">

                        <input placeholder="Digite seu email" className="w-80 h-full bg-[#FFFFFF] 
                    rounded-[4px] placeholder:text-[#353535] text-black ml-6 mr-20 text-[14px]
                    focus:outline-none 2xl:w-96"></input>
                    </div>
                    <div>
                        <button className="bg-[#FAA500] border-2 border-[#FAA500] w-[131px] h-[40px] 
                        rounded-[4px] font-bold text-[16px relative right-10">Enviar</button>
                    </div>
                </div>

                <div className="flex xl:hidden w-[85%]  justify-around mt-5">
                    <div className="w-[60%] border border-black flex justify-center 
                    items-center rounded-[4px] h-[30px]">

                        <input placeholder="Digite seu email" className=" 
                    rounded-[4px] placeholder:text-[#353535] text-black text-[14px]
                    
                    w-[75%] focus:outline-none "></input>
                    </div>

                    <button className="bg-[#FAA500] border-2 border-[#FAA500] w-24 h-8
                        rounded-[4px] font-bold text-[16px]">Enviar</button>

                </div>
            </div>
        </div>
    )
}
