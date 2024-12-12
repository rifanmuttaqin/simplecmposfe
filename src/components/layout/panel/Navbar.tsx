import Image from "next/image";

const Navbar = () => {
  return (<div className={'flex justify-between items-center p-4'}>
    {/*Search Bar*/}
    <div className={'hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2'}>
      <Image src="/search.png" alt='' width={14} height={14}/>
      <input className={'w-[200px] p-2 bg-transparent outline-none'} type={'text'} placeholder={'Search...'}/>
    </div>
    {/*Icon*/}
    <div className={'flex flex-row gap-4 justify-end w-full'}>
    <div className={'flex bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer relative'}>
      <Image src={'/message.png'} alt={''} width={20} height={20}/>
      <span className={'absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-2xl text-sm'}>1</span>
    </div>
    <div className={'flex bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer'}>
      <Image src={'/announcement.png'} alt={''} width={20} height={20}/>
    </div>
      <div className={'flex flex-col'}>
        <span className={'text-sm leading-3 font-medium'}>Rifan Muttaqin</span>
        <span className={'text-[10px] text-gray-500 text-right'}>Admin</span>
      </div>
      <Image src={'/avatar.png'} alt={''} width={36} height={36} className={'rounded-full'} />
    </div>
  </div>)
}

export default Navbar;