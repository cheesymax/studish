import React from "react";
import {navContext} from "./nav";

export default function Bar(props: BarProps) {

    return <>
        <div className="fixed bg-white z-10 t-0 h-20 w-full flex justify-around pt-6 mb-6 border-b-2 border-gray-100">
            <p className={`uppercase font-bold text-2xl`}>
                {props.label}
            </p>
        </div>
    </>;
}

export interface BarProps {
    label: string;
}