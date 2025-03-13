'use client';

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import './style.scss';

interface ButtonProps {
    kind:
    | 'primary'
    | 'primarySmall'
    | 'primaryFilled'
    | 'secondary'
    | 'secondaryFilled'
    | 'primaryIcon'
    | 'secondaryIcon'
    | 'link';

    onClick?: any;
    buttonText?: React.ReactNode;
    disabled?: boolean;
    type?: 'button' | 'submit';
    buttonIcon?: string;
    className?: string;
    width?: number;
    height?: number;
    alt?: string | undefined;
}

const Button = ({ kind, buttonIcon, ...props }: ButtonProps) => {
    const [buttonClass, setButtonClass] = useState('primary');

    const getButtonKind = useCallback((kind: string) => {
        switch (kind) {
            case 'primary':
                setButtonClass('btn-primary');
                break;
            case 'primaryFilled':
                setButtonClass('btn-primary-filled');
                break;
            case 'secondary':
                setButtonClass('btn-secondary');
                break;
            case 'link':
                setButtonClass('btn-link');
                break;
            case 'primarySmall':
                setButtonClass('btn-primary-small');
                break;
            case `primaryIcon`:
                setButtonClass('btn-primary-icon');
                break;
            case `secondaryIcon`:
                setButtonClass('btn-secondary-icon');
                break;
            default:
                setButtonClass('btn-primary');
                break;
        }
    }, [kind]);

    useEffect(() => {
        getButtonKind(kind);
    }, [kind])

    return (
        <button
            type={props.type}
            className={`${buttonClass} ${props.className}`}
            onClick={props.onClick}
        >
            {props.buttonText}
            {buttonIcon ? (<Image width={props.width} height={props.height} alt={props.alt || ''} src={buttonIcon} />) : null}
        </button>
    )
}

export default Button;
