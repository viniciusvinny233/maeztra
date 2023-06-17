interface Parceiro {
    image?: any
}

export default function Partners(props: Parceiro) {
    return (
        <div className="bg-[#EFEFEF] w-72 h-16 flex items-center m-3">
            <img
                src={props.image}
                alt="Partner Logo"
                className="w-full h-full object-cover"
            />
        </div>
    );
}
