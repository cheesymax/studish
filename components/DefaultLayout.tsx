import Nav from "./nav";
import React from "react";
import Bar from "./Bar";

export default function DefaultLayout(props: DefaultLayoutProps) {
    return <>
        <div className=" w-screen h-screen flex flex-col">
            <Nav label={props.label}/>
            <Bar label={props.label}/>
            <div className="relative top-14 mt-6">
                {props.children}
            </div>
        </div>
    </>;
}

export interface DefaultLayoutProps {
    children?: React.ReactElement | React.ReactElement[],
    label: string
}
