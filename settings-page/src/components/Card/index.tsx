import { JSX } from "react";

type CardProps = {
    children: JSX.Element | React.ReactNode;
    className?: string;
}

const Card = ({ children, ...props }: CardProps) => {
    return (
        <div className={`bg-(var(--background)) border border-solid border-[#cccccc] rounded-lg p-5 ${props.className}`}>
            {children}
        </div>
    )
}

export default Card;
