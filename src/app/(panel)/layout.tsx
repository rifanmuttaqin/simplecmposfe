export default function PanelLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <div>{children}</div>
    );
}
