import React from "react";

export default function Bar(props: BarProps) {

    return <>
        <div className="flex justify-around h-4 z-[1] fixed w-full">
            <p className={`uppercase mt-6 font-bold text-2xl`}>{props.label}</p>
        </div>
    </>;
}

export interface BarProps {
    label: string;
}