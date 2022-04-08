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
        <div className={props.className}>
            <div className={'col-span-4 mr-2'}>
                <p>{props.data.exam_name}</p>
                {/*<p className={'text-sm opacity-70'}>{props.data.teacher}</p>*/}
            </div>
            <div>
                <p>Оценка</p>
                <p className={'col-span-1 col-end-6 text-center'}>{props.data.current_mark}ч</p>
                </div>
             <div>
                 <p>Макс.балл</p>
                 <p className={'col-span-2 col-end-8 text-center'}>{props.data.max_mark}</p>
            </div>
        </div>
    )
}