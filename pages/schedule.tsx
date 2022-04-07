import DefaultLayout from "../components/DefaultLayout";
import ScheduleElement from "../components/ScheduleElement"
import axios from "axios";
import {useEffect} from "react";

function huyna() {
    t()
        .then(response => {
            console.log(response.data);
        })
        .catch(err => console.error(err));
}

export default function Schedule() {
    const scheduleList = [
        {
            startTime: '9:00',
            endTime: '10:00',
            subjectName: 'Защита от темных искусств',
            auditory: '302',
        },
        {
            startTime: '10:45',
            endTime: '12:25',
            subjectName: 'Защита от темных искусств',
            auditory: '302',
        },
        {
            startTime: '12:30',
            endTime: '14:00',
            subjectName: 'Защита от темных искусств',
            auditory: '302',
        },
    ]
    useEffect(() => {
        huyna();

    }, []);
    return <>
        <DefaultLayout label={"Расписание"}>
            <div className={"flex w-full h-full flex-col justify-around content-around items-center"}>
                <p className={`w-11/12 text-2xl`}>ПН 05.04</p>
                <ul className={`w-11/12`}>
                    {
                        scheduleList.map(
                            (item, index) =>
                                <ScheduleElement key={index}
                                                 startTime={item.startTime}
                                                 endTime={item.endTime}
                                                 subjectName={item.subjectName}
                                                 auditory={item.auditory}
                                />
                        )
                    }
                </ul>
            </div>
        </DefaultLayout>
    </>;
}
function t() {
    return axios.post(
        `https://studash-service.herokuapp.com/Schedule/onDate`,
        {
            university: 'Хогвардс',
            groupName: 'Гриффиндор-21',
            date: '2022-04-05T00:00:00'
        },
        {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        }
    )
}
