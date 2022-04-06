import Nav from "./nav";
import React from "react";
import Bar from "./Bar";

export default function DefaultLayout(props: DefaultLayoutProps) {
    return <>
        <div className=" w-screen h-screen flex flex-col">
            <Nav label={props.label}/>
            <Bar label={"Расписание"}/>
            <div className="relative ">
                {props.children}
            </div>
        </div>
    </>;
}

export interface DefaultLayoutProps {
    children?: React.ReactElement | React.ReactElement[],
    label: string
}
