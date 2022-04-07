import DefaultLayout from "../components/DefaultLayout";
import React, {useEffect, useState} from "react";
import {IScheduleModel} from "../models/IScheduleModel";
import {ScheduleRequest} from "../models/scheduleRequest";
import API from "../api/api_v1";
import {PlanRequest} from "../models/planRequest";
import {IPlanModel} from "../models/IPlanModel";
import PlanElement from "../components/PlanElement";

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
            <div className={"flex w-full h-full flex-col justify-around content-around items-center"}>
                <div className="information w-11/12">

                    <PeriodNameCtx.Provider value={plan?.periodsName === undefined ? 'семестр' : plan.periodsName}>
                        <ul className={'flex flex-col items-center'}>
                            {
                                plan?.years.map((item, index) =>
                                    <PlanElement key={index}
                                                 data={item}/>
                                )}
                        </ul>
                    </PeriodNameCtx.Provider>
                </div>

            </div>
        </DefaultLayout>
    </>;
}
export const PeriodNameCtx = React.createContext('семестр')