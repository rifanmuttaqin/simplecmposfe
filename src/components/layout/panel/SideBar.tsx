import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/layout/panel/Menu";

const SideBar = () => {
  return (
      <div className={'w-[14%] md:w-[8%] lg:w[16%] xl:w-[14%]'}>
          <Link href={'/'}
                className={'flex justify-center items-center gap-2 py-2 pl-3 lg:justify-start text-gray-500'}>
              <Image src="/logo.png" alt={'Logo App'} width={32} height={32}/>
              <span className={'hidden lg:block pt-2 font-bold font-sans'}> SimpleCMPOS</span>
          </Link>
          <Menu/>
      </div>
  );
}

export default SideBar;