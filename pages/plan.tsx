import DefaultLayout from "../components/DefaultLayout";
import {useEffect, useState} from "react";
import {IScheduleModel} from "../models/IScheduleModel";
import {ScheduleRequest} from "../models/scheduleRequest";
import API from "../api/api_v1";
import {PlanRequest} from "../models/planRequest";
import {IPlanModel} from "../models/IPlanModel";

export default function Plan() {
    const [plan, setPlan] = useState<IPlanModel|undefined>();
    useEffect(() => {
        let requestBody: PlanRequest;
        requestBody = new PlanRequest("Хогвардс", "10.05.01");
        API.educationalPlan(requestBody)
            .then(response => {
                console.log(response.data);
                setPlan(response.data);
            })
            .catch(reason => console.error(reason));
    }, []);
    return <>
        <DefaultLayout label={"Учебный план"}>
            <div className={"flex w-full h-full justify-around content-around"}>
                типа план
            </div>
        </DefaultLayout>
    </>;
}