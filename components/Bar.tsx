import React from "react";

export default function Bar(props: BarProps) {

    return <>
        <div className="relative t-0 h-14 w-full flex justify-around pt-6 mb-5">
            <p className={`uppercase font-bold text-2xl`}>
                {props.label}
            </p>
        </div>
    </>;
}

export interface BarProps {
    label: string;
}