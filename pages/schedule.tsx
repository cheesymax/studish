import DefaultLayout from "../components/DefaultLayout";
import ScheduleElement from "../components/ScheduleElement";
import React, {useEffect, useState} from "react";
import API from "../api/api_v1";
import {ScheduleRequest} from "../models/scheduleRequest";
import {IScheduleModel} from "../models/IScheduleModel";

export default function Schedule() {
    const scheduleList = [
        {
            startTime: new Date("9:00"),
            endTime: new Date("10:00"),
            subject: "Защита от темных искусств",
            auditorium: new Date("302"),
            date: new Date("2022-04-05"),
            group_name: "Гриффинор-21",
            has_lessons: true,
            teacher: "Северус Снейп",
            building: "1"
        },
        {
            startTime: new Date("10:45"),
            endTime: new Date("12:25"),
            subjectName: "Защита от темных искусств",
            auditory: "302",
            date: new Date("2022-04-05"),
            group_name: "Гриффинор-21",
            has_lessons: true,
            teacher: "Северус Снейп",
            building: "1"
        },
        {
            startTime: new Date("12:30"),
            endTime: new Date("14:00"),
            subjectName: "Защита от темных искусств",
            auditory: "302",
            date: new Date("2022-04-05"),
            group_name: "Гриффинор-21",
            has_lessons: true,
            teacher: "Северус Снейп",
            building: "1"
        },
    ];
    const [schedule, setSchedule] = useState<IScheduleModel[]>([]);
    useEffect(() => {
        let requestBody: ScheduleRequest;
        requestBody = new ScheduleRequest(
            "Хогвардс",
            "Гриффиндор-21",
            new Date("2022-04-05"));
        API.scheduleOnDay(requestBody)
            .then(response => {
                console.log(response.data);
                setSchedule(response.data);
            })
            .catch(reason => console.error(reason));
    }, []);
    return <>
        <DefaultLayout label={"Расписание"}>
            <div className={"flex w-full h-full flex-col justify-around content-around items-center"}>
                <p className={`w-11/12 text-2xl`}>ПН 05.04</p>
                <ul className={`w-11/12`}>
                    {
                        schedule.map(
                            (item, index) =>
                                <ScheduleElement key={index}
                                                 data={item}
                                                 svg={<svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                                           xmlns="http://www.w3.org/2000/svg">
                                                     <path
                                                         d="M21.49 10.1901L20.49 9.64008L11.49 4.64008H11.38C11.3187 4.61416 11.2551 4.59407 11.19 4.58008H11H10.82C10.7517 4.59408 10.6847 4.61416 10.62 4.64008H10.51L1.51 9.64008C1.3561 9.7273 1.22809 9.85378 1.13903 10.0066C1.04997 10.1595 1.00305 10.3332 1.00305 10.5101C1.00305 10.687 1.04997 10.8607 1.13903 11.0135C1.22809 11.1664 1.3561 11.2929 1.51 11.3801L4 12.7601V17.5001C4 18.2957 4.31607 19.0588 4.87868 19.6214C5.44129 20.184 6.20435 20.5001 7 20.5001H15C15.7956 20.5001 16.5587 20.184 17.1213 19.6214C17.6839 19.0588 18 18.2957 18 17.5001V12.7601L20 11.6401V14.5001C20 14.7653 20.1054 15.0196 20.2929 15.2072C20.4804 15.3947 20.7348 15.5001 21 15.5001C21.2652 15.5001 21.5196 15.3947 21.7071 15.2072C21.8946 15.0196 22 14.7653 22 14.5001V11.0601C21.9997 10.8829 21.9523 10.7089 21.8627 10.5561C21.7731 10.4032 21.6445 10.2769 21.49 10.1901ZM16 17.5001C16 17.7653 15.8946 18.0196 15.7071 18.2072C15.5196 18.3947 15.2652 18.5001 15 18.5001H7C6.73478 18.5001 6.48043 18.3947 6.29289 18.2072C6.10536 18.0196 6 17.7653 6 17.5001V13.8701L10.51 16.3701L10.66 16.4301H10.75C10.833 16.4405 10.917 16.4405 11 16.4301C11.083 16.4405 11.167 16.4405 11.25 16.4301H11.34C11.3931 16.4189 11.4438 16.3986 11.49 16.3701L16 13.8701V17.5001ZM11 14.3601L4.06 10.5001L11 6.64008L17.94 10.5001L11 14.3601Z"
                                                         fill="black"/>
                                                 </svg>}
                                />
                        )
                    }
                </ul>
            </div>
        </DefaultLayout>
    </>;
}
