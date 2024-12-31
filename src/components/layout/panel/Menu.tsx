import Link from "next/link";
import Image from "next/image";
import { IconHome, IconAddressBook, IconUser, IconSettings, IconLogout } from '@tabler/icons-react';

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: IconHome,
        label: "Home",
        href: "/admin/dashboard",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: IconAddressBook,
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
        icon: IconUser,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: IconSettings,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: IconLogout,
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
        <subitem.icon stroke={2} />
        <span className={'hidden lg:block'}>{subitem.label}</span>
      </Link>))}</div>))}
  </div>);
}

export default Menu;