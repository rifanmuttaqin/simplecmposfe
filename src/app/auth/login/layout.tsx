export default function AuthLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={'w-[100%] bg-[#F7F8FA]'}>
            <div className={'h-screen flex items-center justify-center'}>
                <div>{children}</div>
            </div>
        </div>
    );
}
