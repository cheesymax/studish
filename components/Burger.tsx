import React, {useContext} from "react";
import {navContext} from "./nav";

export default function Burger(props: BurgerProps) {
    const {isActive, toggle} = useContext(navContext);

    return <>
        <button className="fixed group ml-4 outline-0 z-30"
                onClick={toggle}>
            <div
                className="relative flex overflow-hidden items-center justify-center w-[32px] h-20 transform transition-all duration-200 ">
                <div
                    className="flex flex-col justify-between w-[32px] h-[24px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div
                        className={`bg-black h-[3px] w-6 rounded transform transition-all duration-300 origin-left ${isActive ? "translate-y-8 delay-100" : ""}`}/>
                    <div
                        className={`bg-black h-[3px] w-6 rounded transform transition-all duration-300 ${isActive ? "translate-y-8 delay-75" : ""}`}/>
                    <div
                        className={`bg-black h-[3px] w-5 rounded transform transition-all duration-300 origin-left ${isActive ? "translate-y-8" : ""}`}/>

                    <div
                        className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${isActive ? "translate-x-0 flex w-0 w-12" : ""}`}>
                        <div
                            className={`absolute bg-black h-[3px] w-6 rounded transform transition-all duration-500 rotate-0 delay-300 ${isActive ? "rotate-45" : ""}`}/>
                        <div
                            className={`absolute bg-black h-[3px] w-6 rounded transform transition-all duration-500 -rotate-0 delay-300 ${isActive ? "-rotate-45" : ""}`}/>
                    </div>
                </div>
            </div>
        </button>
    </>
}

export interface BurgerProps {
    onClick?: Function
}