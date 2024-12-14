const Footer = () => {
    return (
            <div className={'flex hidden lg:block justify-between items-end p-4 min-h-[5%]  h-[10%] bg-lamaPurple text-black font-semibold text-xs'}>
                <div className={'flex flex-col w-full gap-2'}>
                    <div> &copy; AlBarr Software {new Date().getFullYear()}</div>
                    <div> Made with &hearts; </div>
                </div>
            </div>
    )
}

export default Footer;