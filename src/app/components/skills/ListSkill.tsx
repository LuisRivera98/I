interface SkillListProps {
    id: number,
    name: string,
    frameworks: string
}

export const SkillList = ({ id, name, frameworks }: SkillListProps) => {
    return (
        <div className="flex justify-between py-2 px-3">
            <p className="text-xl font-bold ">{name}</p>
            <p>{frameworks}</p>
        </div>
    )
}