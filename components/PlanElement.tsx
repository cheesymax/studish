import React, {useState} from "react";
import exp from "constants";
import {resolveSrv} from "dns";
import {IPlanModel} from "../models/IPlanModel";
import {Year} from "../models/Year";
import PeriodElement from "./PeriodElement";

export function List(props: {
    key: number | string,
    subjectName : string,
    hours : string,
    examType: string,
    className : string,
}){
    return(
        <div className={props.className}>
            <p className={'m-6'}>{props.subjectName}</p>
            <div className={'w-[2px] h-4 bg-black shrink-0 rounded-2xl'}/>
            <p>{props.hours}ч</p>
            <div className={'w-[2px] h-4 bg-black shrink-0 rounded-2xl'}/>
            <p className={'mr-6'}>{props.examType}</p>
        </div>
    )
}

export default function PlanElement(props: TermElementProps){
    return(
        <li className={'w-11/12'}>
            {/*<p className={'text-2xl'}>{props.data} {props.type}</p>*/}
            {/*<div className={'mt-2 text-[18px]'}>*/}
            {/*        <div>*/}
            {/*            {*/}
            {/*                props.subjects.map(*/}
            {/*                    (item, index) =>*/}
            {/*                        <List subjectName={item.subjectName}*/}
            {/*                              key={index}*/}
            {/*                              hours={item.hours}*/}
            {/*                              examType={item.examtype} className={'grid grid-cols-5 items-center w-full h-auto odd:bg-gray-200 first:rounded-t-2xl last:rounded-b-2xl'}/>*/}
            {/*                )*/}
            {/*            }*/}
            {/*        </div>*/}
            {/*</div>*/}
            <p className={'text-2xl text-center p-6 font-medium'}>{props.data.number} год</p>
                <div className={''}>
                    {
                        props.data.periods.map((item, index) =>
                            <PeriodElement key={index}
                                           data={item}/>
                        )
                    }
                </div>
        </li>
    )
}

export interface TermElementProps{
    key? : number | string,
    data : Year,
}