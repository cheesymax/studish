import React, {ReactElement, useEffect} from "react";
import axios from "axios";
import {IScheduleModel} from "../models/IScheduleModel";

export default function ScheduleElement(props:ScheduleElementProps) {
    return(
        <li className={"flex justify-around content-around items-center  h-20 border-[1px] border-gray-300 rounded-xl mt-4"}>
            <div className={'m-2 flex  flex-col justify-around items-center'}>
                <p>{props.data.start_time.substring(0,props.data.start_time.length - 3)}</p>
                <div className={`bg-black h-[2px] w-4 rounded-xl m-[2px] flex-shrink-0`}/>
                <p>{props.data.end_time.substring(0,props.data.start_time.length - 3)}</p>
            </div>
            <span className={`m-2 w-36`}>
                {props.data.subject}
            </span>
            <div className={`m-2 text-center w-40`}>
                <p>Ауд</p>
                <p>{props.data.auditorium}</p>
            </div>
            <button className={' flex-shrink-0 w-[32px] h-[32px] m-2'}>
                {props.svg}
            </button>
        </li>
    );
}

export interface ScheduleElementProps
{
    key?: number | string,
    data: IScheduleModel,
    svg: React.SVGProps<SVGSVGElement>
}

