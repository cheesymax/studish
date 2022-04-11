import React, {useEffect} from "react";
import {IPeriod} from "../models/Periods";
import {ISubject} from "../models/Subjects";
import {IMarksModel} from "../models/IMarksModel";

export default function MarksElement(props: {
    className?: string,
    data: IMarksModel,
    key?: number,
}){
    useEffect(() => {
        console.log(props.data)
    }, []);

    return (
        <li className={props.className}>

            <div className={'col-span-4 mr-2'}>
                <p>{props.data.subject}</p>
            </div>
            {/*<div className={'w-[2px] h-4 bg-black shrink-0 rounded-2xl'}/>*/}
            <p className={'col-span-1 col-end-6 text-center'}>{props.data.current_mark}</p>
            {/*<div className={'w-[2px] h-4 bg-black shrink-0 rounded-2xl'}/>*/}
            <p className={'col-span-2 col-end-8 text-center'}>{props.data.max_mark}</p>
        </li>
    )
}
