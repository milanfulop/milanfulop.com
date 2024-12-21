interface CustomBoxProps {
    children: React.ReactNode;
    marginTop?: string
    marginBottom?: string;
}

export default function CustomBox({ children, marginBottom = '20px', marginTop = '20px' }: CustomBoxProps) {
    return (
        <div
            style={{
                marginTop: marginTop,
                marginBottom: marginBottom,
            }}
        >
            {children}
        </div>
    );
}
