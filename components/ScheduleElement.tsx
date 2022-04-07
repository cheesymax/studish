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
            <span className={`m-2`}>
                {props.data.subject}
            </span>
            <div className={`m-2 text-center`}>
                <p>Ауд:</p>
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

// [{"id":5,"date":"2022-04-05T00:00:00","group_name":"Гриффиндор-21","has_lessons":true,"start_time":{"ticks":387000000000,"days":0,"hours":10,"milliseconds":0,"minutes":45,"seconds":0,"totalDays":0.4479166666666667,"totalHours":10.75,"totalMilliseconds":38700000,"totalMinutes":645,"totalSeconds":38700},"end_time":{"ticks":441000000000,"days":0,"hours":12,"milliseconds":0,"minutes":15,"seconds":0,"totalDays":0.5104166666666666,"totalHours":12.25,"totalMilliseconds":44100000,"totalMinutes":735,"totalSeconds":44100},"subject":"Заклинания","teacher":"Филиус Флитвик","auditorium":null,"building":null},{"id":6,"date":"2022-04-05T00:00:00","group_name":"Гриффиндор-21","has_lessons":true,"start_time":{"ticks":450000000000,"days":0,"hours":12,"milliseconds":0,"minutes":30,"seconds":0,"totalDays":0.5208333333333334,"totalHours":12.5,"totalMilliseconds":45000000,"totalMinutes":750,"totalSeconds":45000},"end_time":{"ticks":504000000000,"days":0,"hours":14,"milliseconds":0,"minutes":0,"seconds":0,"totalDays":0.5833333333333334,"totalHours":14,"totalMilliseconds":50400000,"totalMinutes":840,"totalSeconds":50400},"subject":"Зельеварение","teacher":"Северус Снейп","auditorium":null,"building":null},{"id":4,"date":"2022-04-05T00:00:00","group_name":"Гриффиндор-21","has_lessons":true,"start_time":{"ticks":324000000000,"days":0,"hours":9,"milliseconds":0,"minutes":0,"seconds":0,"totalDays":0.375,"totalHours":9,"totalMilliseconds":32400000,"totalMinutes":540,"totalSeconds":32400},"end_time":{"ticks":378000000000,"days":0,"hours":10,"milliseconds":0,"minutes":30,"seconds":0,"totalDays":0.4375,"totalHours":10.5,"totalMilliseconds":37800000,"totalMinutes":630,"totalSeconds":37800},"subject":"Полеты на метлах","teacher":"Роланда Трюк","auditorium":null,"building":null},{"id":48,"date":"2022-04-05T00:00:00","group_name":"Гриффиндор-21","has_lessons":true,"start_time":{"ticks":324000000000,"days":0,"hours":9,"milliseconds":0,"minutes":0,"seconds":0,"totalDays":0.375,"totalHours":9,"totalMilliseconds":32400000,"totalMinutes":540,"totalSeconds":32400},"end_time":{"ticks":378000000000,"days":0,"hours":10,"milliseconds":0,"minutes":30,"seconds":0,"totalDays":0.4375,"totalHours":10.5,"totalMilliseconds":37800000,"totalMinutes":630,"totalSeconds":37800},"subject":"Полеты на метлах","teacher":"Роланда Трюк","auditorium":"Стадион","building":"Стадион"},{"id":49,"date":"2022-04-05T00:00:00","group_name":"Гриффиндор-21","has_lessons":true,"start_time":{"ticks":387000000000,"days":0,"hours":10,"milliseconds":0,"minutes":45,"seconds":0,"totalDays":0.4479166666666667,"totalHours":10.75,"totalMilliseconds":38700000,"totalMinutes":645,"totalSeconds":38700},"end_time":{"ticks":441000000000,"days":0,"hours":12,"milliseconds":0,"minutes":15,"seconds":0,"totalDays":0.5104166666666666,"totalHours":12.25,"totalMilliseconds":44100000,"totalMinutes":735,"totalSeconds":44100},"subject":"Заклинания","teacher":"Филиус Флитвик","auditorium":"211","building":"3"},{"id":50,"date":"2022-04-05T00:00:00","group_name":"Гриффиндор-21","has_lessons":true,"start_time":{"ticks":450000000000,"days":0,"hours":12,"milliseconds":0,"minutes":30,"seconds":0,"totalDays":0.5208333333333334,"totalHours":12.5,"totalMilliseconds":45000000,"totalMinutes":750,"totalSeconds":45000},"end_time":{"ticks":504000000000,"days":0,"hours":14,"milliseconds":0,"minutes":0,"seconds":0,"totalDays":0.5833333333333334,"totalHours":14,"totalMilliseconds":50400000,"totalMinutes":840,"totalSeconds":50400},"subject":"Зельеварение","teacher":"Северус Снейп","auditorium":"405","building":"1"}]

