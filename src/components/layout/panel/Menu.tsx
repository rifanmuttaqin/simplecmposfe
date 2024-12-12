import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/admin/dashboard",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/student.png",
        label: "Contact",
        href: "/admin/contact",
        visible: ["admin", "teacher"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];


const Menu = () => {
  return (<div className={'mt-4 ml-4 text-sm'}>
    {menuItems.map((item) => (<div className={'flex flex-col gap-2'} key={item.title}>
      <span className={'hidden lg:block text-gray-400 font-light my-4'}>{item.title}</span>
      {item.items.map(subitem=>(<Link className={'flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2'} href={subitem.href} key={subitem.label}>
        <Image src={subitem.icon} alt={''} width={20} height={20} />
        <span className={'hidden lg:block'}>{subitem.label}</span>
      </Link>))}</div>))}
  </div>);
}

export default Menu;