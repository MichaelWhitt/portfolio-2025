import { ReactNode, ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: any
    text?: string
    icon?: React.ElementType
    ariaText?: string
    className?: string
    iconLocation?: 'left' | 'right' | 'top' | 'bottom'
    children?: ReactNode | string
    ref?: React.Ref<HTMLButtonElement>
}

const Button = (props: ButtonProps) => {
    const { icon: Icon, iconLocation, text, children, className = 'bg-white/5 hover:bg-white/10', ariaText, ...rest } = props

    return (
        <button className={`${className} cursor-pointer `} aria-label={ariaText} {...rest}>
            {iconLocation === 'left' && Icon && <Icon className='inline-block mr-2' />}
            {iconLocation === 'top' && Icon && <Icon className='inline-block mb-2' />}
            {text || children}
            {iconLocation === 'right' && Icon && <Icon className='inline-block ml-2' />}
            {iconLocation === 'bottom' && Icon && <Icon className='inline-block mt-2' />}
        </button>
    )
}

export default Button