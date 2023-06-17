import Newsletter from "./newsletter";
import { Titillium_Web  } from 'next/font/google'

const titillium = Titillium_Web({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700', '900'],
})

export default function Collection() {
    return (
        <div>
            <div className={`w-full ${titillium.className} my-0 xl:my-7 flex justify-center`}>
                <div className="w-[90%] m-0 lg:m-10 flex justify-between flex-col lg:flex-row items-center">

                    <div className="flex flex-col justify-center items-center w-[100%] lg:w-[28%] md:w-[70%]">
                        <div className="mr-3 2xl:mr-2">

                            <p className="text-black font-bold text-[24px]">Lorem ipsum</p>
                            <p className="text-black font-normal text-[14px] mt-5">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit
                                cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut
                                mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra.
                                Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id.
                                Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit m
                                assa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor
                                phasellus donec condimentum sit sapien.
                            </p>

                        </div>
                    </div>

                    <div className="hidden sm:flex w-[100%] h-48 m-10 lg:m-0 md:w-[70%] md:h-[100%]">
                        <img
                            src={"new_collection.png"}
                            alt="Partner Logo"
                            className="w-full h-full object-cover rounded-md"/>
                    </div>

                    <div className="flex sm:hidden w-[100%] h-52 m-10 lg:m-0 md:w-[70%] md:h-[100%]">
                        <img
                            src={"new_collection_small.png"}
                            alt="Partner Logo"
                            className="w-full h-full object-cover rounded-md"/>
                    </div>

                </div>
            </div>

            {/* Newsletter */}
            <Newsletter />
        </div>
    )
}