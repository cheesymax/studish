import Link from "next/link";
import React, {useState} from "react";
import Image from "next/image";
import ListElement from "./ListElement";
import Bar from "./Bar";
import Burger from "./Burger";

export default function Nav(props: {
    label: string;
}) {
    const [menuShow, setMenuShow] = useState(false);

    const links = [
        {
            href: "/",
            label: "Учебный план"
        },
        {
            href: "/",
            label: "Расписание"
        },
        {
            href: "/",
            label: "Оценки"
        },
        {
            href: "/",
            label: "Ресурсы"
        }
    ];
    const btnRef = React.createRef();
    const menuRef = React.createRef();
    return (
        <nav className={`fixed`}>
            <Bar label={"Расписание"}/>
            <Burger onClick={() => setMenuShow(prev => !prev)} />
            <div
                className={`menu w-full h-full absolute transform transition-all duration-500 origin-left z-1 ${menuShow ? "" : "-translate-x-full"}`}>
                <div className="person grid grid-cols-2 m-6">
                    <h2 className="text-3xl leading-10">Гарри Поттер Джеймсович</h2>
                    <div className="pic w-24  h-24 ml-auto mt-3">
                        <Image src="/img.png" alt="me" width="128" height="128" className="rounded-full"/>
                    </div>
                    <p className="mt-2">Мальчик, который выжил</p>
                </div>

                <ul className="flex flex-col justify-between w-3/6 h-2/5 text-2xl ml-6 mt-12">
                    {
                        links.map(
                            (link, index) =>
                                <ListElement key={index} className={"border-b-2 border-gray-500 w-full h-10 hover:bg-slate-100 transition-all duration-300"}>
                                    <Link href={link.href}>
                                        <a>{link.label}</a>
                                    </Link>
                                </ListElement>
                        )
                    }
                </ul>
            </div>
        </nav>
    );
}