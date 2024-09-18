import Image from "next/image";
import { IoIosSend } from "react-icons/io";
import { TiDocumentText } from "react-icons/ti";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const SectionWhoI = () => {
    return (
        <section id="whoi" className="py-24">

            <div className="flex items-center justify-center px-32">

                <div className="py-1">
                    <h1 className="text-center font-bold text-4xl px-5 py-1">Acerca de mi</h1>
                    <h2 className="font-extralight text-center text-3xl px-5 py-1">Conoceme un poco mas</h2>
                    <p className="text-2xl py-5 font-mono ">
                        Soy un desarrollador de software full stack con más de 5 años de experiencia en el desarrollo de proyectos, aplicando las mejores prácticas y enfocado en la satisfacción del cliente final. Me especializo en crear interfaces simples pero visualmente atractivas.
                        Disfruto trabajar con tecnologías como <span className="font-bold">React</span> o <span className="font-bold">Vue</span> para frontend, y <span className="font-bold">PHP</span> o <span className="font-bold">ASP.NET</span> para backend.
                        Para desarrollo móvil, prefiero usar <span className="font-bold">MAUI</span> con <span className="font-bold">C#</span> o <span className="font-bold">React Native</span>.
                    </p>
                    <p className="text-2xl py-5 font-mono">
                        He colaborado con empresas de diversos sectores, optimizando procesos de negocio en áreas como marketing, medicina, recursos humanos, aseguradoras, inmobiliaria, construcción, restauración, manufactura y otros ámbitos empresariales.
                    </p>
                </div>

            </div>
        </section>
    )
}