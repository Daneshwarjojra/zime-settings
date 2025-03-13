import { Ref, FocusEvent, ChangeEvent } from "react";

interface InputProps {
    fieldLabel?: string;
    value: string;
    id?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    onClick?: (event: KeyboardEvent) => void;
    autoComplete?: 'on' | 'off';
    placeholder?: string;
    disabled?: boolean;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: MouseEvent) => void;
    type?:
    | 'text'
    | 'number'
    | 'email'
    | 'checkbox';
    max?: number;
    maxLength?: number;
    min?: number;
    name?: string;
    ref?: Ref<HTMLInputElement>;
    error?: boolean;
    className?: string;
}

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col mt-[16px]">
            {props.fieldLabel && <p className="font-manrope font-semibold">{props.fieldLabel}</p>}
            <input placeholder={props.placeholder} className={`p-[8px] border border-solid border-[#cccccc] rounded-lg ${props.className}`} type={props.type} value={props.value} onChange={props.onChange} />
        </div>
    )
}
