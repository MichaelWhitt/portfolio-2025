
/*SVGs from Lucide-react*/

export const LinkedIn = ({ className = '', width = 40, height = 40, fill = "#9333EA33", stroke = "#AD46FF" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
        </svg>
    )
}

export const Email = ({ className='', width = 40, height = 40, fill = "#9333EA33", stroke = "#AD46FF" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
    )
}

export const Code = ({ className="", width = 40, height = 40, fill = "none", stroke = "#AD46FF" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="m18 16 4-4-4-4"/>
            <path d="m6 8-4 4 4 4"/>
            <path d="m14.5 4-5 16"/>
        </svg>
    )
}

export const Accessibility = ({ className="", width = 40, height = 40, fill = "none", stroke = "#AD46FF" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="16" cy="4" r="1"/>
            <path d="m18 19 1-7-6 1"/>
            <path d="m5 8 3-3 5.5 3-2.36 3.5"/>
            <path d="M4.24 14.5a5 5 0 0 0 6.88 6"/>
            <path d="M13.76 17.5a5 5 0 0 0-6.88-6"/>
        </svg>
    )
}

export const Sparkles = ({ className ="", width = 40, height = 40, fill = "none", stroke = "#AD46FF" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
            <path d="M20 3v4"/>
            <path d="M22 5h-4"/>
            <path d="M4 17v2"/>
            <path d="M5 18H3"/>
        </svg>
    )
}

export const ArrowLeft = ({ className = '', width = 40, height = 40, fill = "none", stroke = "#AD46FF" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
        </svg>
    )
}

export const X = ({ className = '', width = 40, height = 40, fill = "none", stroke = "#e158f3" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    )
}

export const TypeLine = ({ className = '', width = 40, height = 40, fill = "red", stroke = "#e158f3" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polyline points="4 7 4 4 20 4 20 7"/>
            <line x1="9" x2="15" y1="20" y2="20"/>
            <line x1="12" x2="12" y1="4" y2="20"/>
        </svg>
    )
}

export const MousePointerClick = ({ className = '', width = 40, height = 40, fill = "none", stroke = "#e158f3" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M14 4.1 12 6"/>
            <path d="m5.1 8-2.9-.8"/>
            <path d="m6 12-1.9 2"/>
            <path d="M7.2 2.2 8 5.1"/>
            <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/>
        </svg>
    )
}

export const Contrast = ({ className = '', width = 40, height = 40, fill = "none", stroke = "#e158f3" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 18a6 6 0 0 0 0-12v12z"/>
        </svg>
    )
}