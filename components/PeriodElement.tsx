import {Period} from "../models/Periods";
import SubjectElement from "./SubjectElement";
import {useContext} from "react";
import {PeriodNameCtx} from "../pages/plan";

export default function PeriodElement(props: SemestrProps){
    const periodName = useContext(PeriodNameCtx);
    return (
        <>

            <div className={'mb-10 last:mb-0 bg-gray-200 rounded-2xl'}>
                <p className={'w-40 pl-6 pt-2 pb-2 font-medium'}>{props.data.number} {periodName}</p>
                {
                    props.data.subjects.map((item, index) =>
                            <SubjectElement key={index}
                                            data={item}
                                            className={'grid grid-cols-7 divide-x-2  px-6 divide-gray-300 items-center w-full h-auto py-3 even:bg-white last:rounded-b-2xl'}/>
                    )
                }
            </div>
        </>
    )
}

export interface SemestrProps{
    key? : number | string,
    data: Period
}