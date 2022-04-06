import React, {ReactChildren, ReactElement} from "react";
import Link from "next/link";

export default function ListElement(props:ListElementProps)
{
    return <>
        <li className={props.className}>
            {props.children}
        </li >
    </>
}

export interface ListElementProps
{
    className?: string,
    key?: number | string,
    children?: ReactElement | ReactElement[]
}