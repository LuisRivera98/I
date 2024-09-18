import { IoMdMenu } from "react-icons/io";

export const NavBar = () => {
    return (
        <>
            <header className="">
                <section className=" ">

                    <nav className="flex justify-between bg-gray-900 text-white w-screen">
                        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                <li><a className="hover:text-gray-200" href="/">Inicio</a></li>
                                <li><a className="hover:text-gray-200" href="#">Proyectos</a></li>
                                <li><a className="hover:text-gray-200" href="#">Contacto</a></li>
                            </ul>
                        </div>

                        <a className="text-white navbar-burger self-center mr-12 xl:hidden" href="#">
                            <IoMdMenu size={20} />
                        </a>
                    </nav>

                </section>
            </header>

        </>
    )
}