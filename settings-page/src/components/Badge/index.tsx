import CheckIcon from "@/components/Progressbar/CheckIcon";

interface BadgeProps {
    text?: string;
    color?: string,
    isActive: boolean
}
const Badge = ({ color = '#5f6875', isActive = false, ...props }: BadgeProps) => {
    return (
        <div className="flex items-center gap-x-1">
            {isActive && <CheckIcon color={color} width={16} height={16} />}
            <p className="font-semibold text-sm">{props.text}</p>
        </div>
    )
}

export default Badge;
