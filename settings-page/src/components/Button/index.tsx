'use client';

import Image from "next/image";
import { JSX, useCallback, useEffect, useState } from "react";

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
    | 'link'
    | 'custom';
    onClick?: () => void;
    buttonText?: React.ReactNode;
    disabled?: boolean;
    type?: 'button' | 'submit';
    buttonIcon?: string;
    className?: string;
    customClassName?: string;
    width?: number;
    height?: number;
    alt?: string | undefined;
    subText?: string;
    key?: string;
    buttonIconLeft?: JSX.Element | React.ReactNode
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
            case `custom`:
                setButtonClass('btn-custom');
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
            key={props.key}
            type={props.type}
            className={`${buttonClass} ${props.className} ${props.customClassName}`}
            onClick={props.onClick}
        >
            {props.buttonIconLeft && props.buttonIconLeft}
            <span className="flex">
                {props.buttonText}
                {props.subText && <br />}
                {props.subText && props.subText}
            </span>
            {buttonIcon ? (<Image width={props.width} height={props.height} alt={props.alt || ''} src={buttonIcon} />) : null}
        </button>
    )
}

export default Button;
