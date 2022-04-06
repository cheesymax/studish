import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import {inspect} from "util";
import {images} from "next/dist/build/webpack/config/blocks/images";

export default function Nav(props:{
    label: string;
}) {
    const [menuShow, setMenuShow] = React.useState(false);
    const btnRef = React.createRef();
    const menuRef = React.createRef();
    const openMenu = () => {
        React.constructor(btnRef.current, menuRef.current, {
            placement: 'bottom-start'
        })
        setMenuShow(true)
        console.log('Open')

    }
    const closeMenu = () => {
        setMenuShow(false);
        console.log("close")
    }
        return(
            <nav className={`fixed`}>
                <div className='grid grid-cols-2 h-20'>
                    <div className=''>
                        <button className="relative group ml-6 outline-0"
                                onClick={ () => {
                            menuShow
                                ? closeMenu()
                                : openMenu()
                        }}>
                            <div className="relative flex overflow-hidden items-center justify-center w-[32px] h-20 transform transition-all duration-200 ">
                                <div className="flex flex-col justify-between w-[32px] h-[24px] transform transition-all duration-300 origin-center overflow-hidden">
                                    <div className={`bg-black h-[3px] w-6 rounded transform transition-all duration-300 origin-left ${menuShow ? 'translate-y-8 delay-100' : ''}`}/>
                                    <div className={`bg-black h-[3px] w-6 rounded transform transition-all duration-300 ${menuShow ? 'translate-y-8 delay-75' : ''}`}/>
                                    <div className={`bg-black h-[3px] w-5 rounded transform transition-all duration-300 origin-left ${menuShow ? 'translate-y-8' : ''}`}/>

                                    <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${menuShow ? 'translate-x-0 flex w-0 w-12' : ''}`}>
                                        <div className={`absolute bg-black h-[3px] w-6 rounded transform transition-all duration-500 rotate-0 delay-300 ${menuShow ? 'rotate-45' : ''}`}/>
                                        <div className={`absolute bg-black h-[3px] w-6 rounded transform transition-all duration-500 -rotate-0 delay-300 ${menuShow ? '-rotate-45' : ''}`}/>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <p className={`uppercase mt-6 font-bold text-2xl transition-all duration-500 ${menuShow ? 'opacity-0' : ''}`}>{props.label}</p>
                </div>
                <div className={`menu w-full h-full absolute transform transition-all duration-500 origin-left z-1 ${menuShow ? '' : '-translate-x-full'}`}>
                    <div className="person grid grid-cols-2 m-6">
                        <h2 className="text-3xl leading-10">Гарри Поттер Джеймсович</h2>
                        <div className="pic w-24  h-24 ml-auto mt-3">
                            <Image src='/img.png' alt='me' width='128' height='128' className='rounded-full'/>
                        </div>
                        <p className='mt-2'>Мальчик, который выжил</p>
                    </div>

                        <ul className='flex flex-col justify-between w-3/6 h-2/5 text-2xl ml-6 mt-12'>
                            <li className='border-b-2 border-gray-500 w-full h-10'>
                                <Link href="/" >
                                    <a>Учебный план</a>
                                </Link>
                            </li >
                            <li className='border-b-2 border-gray-500 w-full h-10'>
                                <Link href="/">
                                    <a>Расписание</a>
                                </Link>
                            </li>
                            <li className='border-b-2 border-gray-500 w-full h-10'>
                                <Link href="/">
                                    <a>Оценки</a>
                                </Link>
                            </li>
                            <li className='border-b-2 border-gray-500 w-full h-10'>
                                <Link href="/">
                                    <a>Ресурсы</a>
                                </Link>
                            </li>
                        </ul>
                </div>
            </nav>
        )
    }