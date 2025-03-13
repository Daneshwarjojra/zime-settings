import { ChangeEventHandler, JSX } from "react";

interface CheckBoxLabel {
    children?: JSX.Element | React.ReactNode | string,
    checked?: boolean;
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string,
    className?: string,
    key?: string | number,
    value?: string,
    disabled?: boolean
}

const Checkbox = ({ children, checked = false, ...props }: CheckBoxLabel) => {

    return (<label key={props.key} className="flex items-center">
        <input checked={checked} disabled={props.disabled} className={props.className} value={props.value} onChange={props.onChange} type="checkbox" />
        {children}
    </label>);
};

export default Checkbox;