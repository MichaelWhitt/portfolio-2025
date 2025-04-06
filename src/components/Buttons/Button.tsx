interface ButtonProps {
    text: string
    icon?: React.HTMLElementType
    ariaText?: string
    className?: string
    iconLocation?: 'left' | 'right' | 'top' | 'bottom'
}

const Button = (props: ButtonProps) => {
    const Icon = props.icon;

    return (
        <button className={props.className || ''} aria-label={props.ariaText}>
            {props.iconLocation === 'left' && Icon && <Icon className="inline-block mr-2" />}
            {props.iconLocation === 'top' && Icon && <Icon className="inline-block mb-2" />}
            {props.text}
            {props.iconLocation === 'right' && Icon && <Icon className="inline-block ml-2" />}
            {props.iconLocation === 'bottom' && Icon && <Icon className="inline-block mt-2" />}
        </button>
    )
}

export default Button