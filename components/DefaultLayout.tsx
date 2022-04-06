import Nav from "./nav";
import React, {ReactChildren, ReactElement} from "react";

export default function DefaultLayout(props: DefaultLayoutProps) {
    return <>
        <div className="wrapper w-full h-[10000px]">
            <Nav label={props.label}/>
            {props.children}
        </div>
    </>;
}

export interface DefaultLayoutProps {
    children?: React.ReactElement | React.ReactElement[],
    label: string
}
