interface Motivo {
    image?: any
    title?: string
    subtitle?: string
}

export default function Reasons(props: Motivo) {
    return (
        <div className="bg-[#EFEFEF] w-72 h-16 flex items-center m-3">
            <img
                src={props.image}
                alt="Reason Icon"
                className="w-8 h-8 ml-4"
            />
            <div className="flex flex-col ml-4">
                <p className="text-black font-bold text-[14px]">{props.title}</p>
                <p className="text-black text-[12px]">{props.subtitle}</p>
            </div>
        </div>
    );
}
