import React, {Dispatch, SetStateAction, useCallback, useState} from "react";
import ArrowBtn from "./ArrowBtn";

export function SwitchPeriod(props: SwitchPeriodProps){


    const [periodNumber, setPeriodNumber] = useState(props.current);
    const [minValue, setMinValue] = useState(props.min);
    const [maxValue, setMaxValue] = useState(props.max);
    useCallback(
        () => {
            props.callback(periodNumber)
        },
        [periodNumber],
    );

    return (
        <div className={'w-60 flex justify-around pb-6'}>
            <ArrowBtn isDisabled={periodNumber === minValue} className={'rotate-180'} onClick={() => {setPeriodNumber(prevState => prevState - 1)}}/>
            <p>{periodNumber} {props.periodName}</p>
            <ArrowBtn isDisabled={periodNumber === maxValue} onClick={() => {setPeriodNumber(prevState => prevState + 1)}}/>
        </div>
    )
}

export interface SwitchPeriodProps{
    periodName: string,
    min: number,
    max: number,
    current: number,
    callback: Dispatch<SetStateAction<number>>
}