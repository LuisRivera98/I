import Image from "next/image";
import { LuAppWindow, LuUser } from "react-icons/lu";
import { FaPhp } from "react-icons/fa";
import { CardSkill } from "../skills/CardSkill"
const listFrontEnd = [
    {
        id: 1,
        name: "Css",
        frameworks: "Css3,SASS,LESS"
    },
    {
        id: 2,
        name: "Javascript",
        frameworks: "Typescript,ES6+"
    },
    {
        id: 3,
        name: "React",
        frameworks: "Next JS"
    },
    {
        id: 4,
        name: "TailwindCSS",
        frameworks: ""
    },
    {
        id: 5,
        name: "Bootstrap",
        frameworks: "3, 4, 5"
    },
    {
        id: 6,
        name: "Blade",
        frameworks: ""
    },
    {
        id: 6,
        name: "Vue",
        frameworks: ""
    },
]

const skillsBackend = [
    {
        id: 1,
        name: "Node js",
        frameworks: "Express, Next js"
    },
    {
        id: 2,
        name: "PHP",
        frameworks: "Versiones 5.6,7 y 8"
    },
    {
        id: 3,
        name: "PHP Frameworks",
        frameworks: "Laravel"
    }, {
        id: 4,
        name: "C#",
        frameworks: "Asp .NET,.NET Core"
    },
    {
        id: 5,
        name: "Apis",
        frameworks: "REST,GraphQL"
    },
    {
        id: 6,
        name: "Web Scraping",
        frameworks: "Selenium"
    },
]

const skilldatabase = [
    {
        id: 1,
        name: "SQL",
        frameworks: "SQL SERVER, MYSQL, ORACLE SQL, PL/SQL"
    },
    {
        id: 2,
        name: "ORM",
        frameworks: "Entity Framework, Eloquent"
    },
    {
        id: 3,
        name: "MongoDB",
        frameworks: ""
    },

    {
        id: 4,
        name: "Firebase",
        frameworks: ""
    },
    {
        id: 5,
        name: "Appscript",
        frameworks: ""
    },
]

const skillsDesign = [
    {
        id: 1,
        name: "Figma",
        frameworks: ""
    },
    {
        id: 2,
        name: "Adobe XD",
        frameworks: ""
    },
    {
        id: 3,
        name: "Adobe Ilustrator",
        frameworks: ""
    },
    {
        id: 4,
        name: "Adobe Photoshop",
        frameworks: ""
    },
]

const skillSoft = [
    {
        id: 1,
        name: "Comunicación técnica",
        frameworks: ""
    },
    {
        id: 2,
        name: "Manejo del feedback",
        frameworks: ""
    },
    {
        id: 3,
        name: "Pensamiento analítico",
        frameworks: ""
    },
    {
        id: 4,
        name: "Gestión del tiempo",
        frameworks: ""
    },
    {
        id: 5,
        name: "Trabajo en equipo",
        frameworks: ""
    },
    {
        id: 6,
        name: "Resolución de problemas",
        frameworks: ""
    }
]

const skillsMain = [
    {
        id: 1,
        name: "Desarrollo FrontEnd",
        description: "El desarrollo frontend se enfoca en la creación de la interfaz visual y la experiencia de usuario de una aplicación o sitio web.",
        color: "bg-blue-300",
        icon: <LuAppWindow size={90} />,
        skills: listFrontEnd
    },
    {
        id: 2,
        name: "Desarrollo Backend",
        description: "El backend es la parte de una aplicación o sitio web que maneja la lógica del servidor.",
        color: "bg-blue-300",
        icon: <LuAppWindow size={90} />,
        skills: skillsBackend
    },
    {
        id: 3,
        name: "Diseño de interfaces",
        description: "El diseño de interfaces se refiere a la creación de interfaces visuales que faciliten la interacción del usuario con una aplicación.",
        color: "bg-blue-300",
        icon: <LuAppWindow size={90} />,
        skills: skillsDesign
    }
    ,
    {
        id: 4,
        name: "Bases de datos",
        description: "Una base de datos es una recopilación organizada de información o datos estructurados",
        color: "bg-blue-300",
        icon: <LuAppWindow size={90} />,
        skills: skilldatabase
    }, {
        id: 5,
        name: "Habilidades Blandas",
        description: "Las habilidades blandas son competencias no técnicas relacionadas con la interacción interpersonal, la gestión emocional y la adaptación en el entorno laboral.",
        color: "bg-blue-300",
        icon: <LuUser size={90} />,
        skills: skillSoft
    }
]

export const SectionSkills = () => {
    return (
        <section id="skills" className="py-24 ">

            <div className="px-32">

                <div className="py-3">
                    <h1 className="text-center font-bold text-4xl px-5 py-1">Habilidades</h1>
                    <h2 className="font-extralight text-center text-3xl px-5 py-1">Conoce mis habilidades</h2>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 gap-5">

                    {
                        skillsMain.map(item => (
                            <CardSkill key={item.id} {...item} />
                        ))
                    }
                </div>


            </div>
        </section>
    )
}