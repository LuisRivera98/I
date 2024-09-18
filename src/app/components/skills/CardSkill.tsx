import { SkillList } from "./ListSkill"

interface TypeSkiilsProps {
    name: string,
    description: string,
    color: string,
    icon: JSX.Element,
    skills: { id: number, name: string, frameworks: string }[]
}

export const CardSkill = ({ name, color, description, icon, skills }: TypeSkiilsProps) => {
    return (
        <div className={`${color} p-6 rounded-2xl`}>
            <div className="flex justify-between items-start gap-4 py-2 px-3 ">
                {icon}
                <div className="">
                    <p className="font-bold text-xl">{name}</p>
                    <p className="font-extralight text-md">{description}</p>
                </div>

            </div>

            <div className="py-2">
                {skills.map(skilitem => (
                    <SkillList key={skilitem.id} {...skilitem} />
                ))}
            </div>
        </div>
    )
}