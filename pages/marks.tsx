import DefaultLayout from "../components/DefaultLayout";
import React, {SetStateAction, useContext, useEffect, useState} from "react";
import {SubjectElementsProps} from "../components/SubjectElement";
import {IMarksModel} from "../models/IMarksModel";
import {PeriodMarksRequest} from "../models/PeriodMarksRequest";
import API from "../api/api_v1";
import ArrowBtn from "../components/ArrowBtn";
import {SwitchPeriod} from "../components/SwitchPeriod";
import MarksElement from "../components/MarksElement";





export default function Marks() {
    const [marks, setMarks] = useState<IMarksModel[]>([]);
    const [num, setNum] = useState(1);
    const [e, setE] = useState<Element[]|undefined>();
    useEffect(() => {
        let requestBody: PeriodMarksRequest;
        requestBody = new PeriodMarksRequest("Гарри Поттер",
            'Гриффиндор-21',
            'Хогвардс',num)
        API.periodMarks(requestBody).then(response => {
            setMarks(response.data);
            console.log(response.data)
        }).catch(reason => console.error(reason))
    }, [num]);
    useEffect(() => {
        let requestBody: PeriodMarksRequest;
        requestBody = new PeriodMarksRequest("Гарри Поттер",
            'Гриффиндор-21',
            'Хогвардс',num)
        API.periodMarks(requestBody).then(response => {
            setMarks(response.data);
            console.log(response.data)
        }).catch(reason => console.error(reason))
    }, []);


    function rend() {
        return marks.map((item, index) =>
            <MarksElement key={index} data={item}/>
        );
    }

    return <>
        <DefaultLayout label={"Оценки"}>
            <div className={"flex w-screen h-full flex-col justify-around content-around items-center"}>
                    <SwitchPeriod min={1} max={marks.length} current={num} periodName={'семестр'} callback={(value) => setNum(value)}/>
                <ul>{
                    //rend()
                    marks.map((item, index) =>
                        <MarksElement key={index}
                                      data={item}
                                      className={"grid grid-cols-7 divide-x-2 first:rounded-t-2xl last:rounded-b-2xl px-6 divide-gray-300 items-center w-full h-auto py-3 odd:bg-gray-200 even:border-2"}/>)
                }</ul>

            </div>
        </DefaultLayout>
    </>;
}