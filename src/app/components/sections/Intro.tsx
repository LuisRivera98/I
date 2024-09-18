import Image from "next/image";
import { IoIosSend } from "react-icons/io";
import { TiDocumentText } from "react-icons/ti";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const SectionIntro = () => {
    return (
        <section id="intro" className="grid grid-cols-3 xs:grid-cols-1 gap-8 py-24">

            <div className="flex items-center justify-end col-span-1">
                <div>
                    <Image
                        src={'https://avatars.githubusercontent.com/u/50728254?v=4&size=256'}
                        alt="logo"
                        width={250}
                        priority={true}
                        height={250}
                    />
                </div>
            </div>

            <div className="flex items-center justify-start col-span-2">

                <div className="py-1">
                    <span className="font-thin text-lg text-pretty text opacity-50 px-5 py-2">HOLA, MI NOMBRE ES</span>
                    <h1 className="font-bold text-5xl px-5 py-1">Luis Manuel Rivera Martinez</h1>

                    <h1 className="font-mono text-3xl px-5 py-1 ">
                        Desarrallador Full-Stack e ingeniero en TI
                    </h1>

                    <div className="flex gap-2 py-1 px-5">
                        <a className="text-opacity-50 p-2 hover:bg-gray-400 " href="https://www.linkedin.com/in/luisrmtz9803/" >
                            <FaLinkedin size={30} />
                        </a>

                        <a className="text-opacity-50 p-2 hover:bg-gray-400 " href="https://github.com/LuisRivera98" >
                            <FaGithub size={30} />
                        </a>
                    </div>


                    <div className="flex gap-5 py-1 px-5">
                        <button className="flex items-center gap-1 width-[250px] bg-blue-600 text-white p-4 rounded-xl font-bold hover:bg-blue-500 ">
                            <IoIosSend size={23} />
                            Contáctame
                        </button>

                        <button className="flex items-center gap-1 width-[250px] bg-gray-600 text-white p-4 rounded-xl font-bold hover:bg-gray-500 ">
                            <TiDocumentText size={23} />
                            Mi CV
                        </button>
                    </div>
                </div>


            </div>
        </section>
    )
}