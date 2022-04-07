import axios from "axios";
import {ScheduleRequest} from "../models/scheduleRequest";
import {PlanRequest} from "../models/planRequest";

const HOST = "https://studash-service.herokuapp.com";

const API = {
    scheduleOnDay:function(requestBody:ScheduleRequest) {
        return axios.post(
            `${HOST}/Schedule/onDate`,
            requestBody,
            {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": `${HOST}`,
                },
            }
        )
    },
    schedule: function (requestBody: ScheduleRequest)
    {
        return axios.post(
            `${HOST}/Schedule`,
            requestBody,
            {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": `${HOST}`,
                },
            }
        )
    },
    educationalPlan: function (requestBody: PlanRequest)
    {
        return axios.post(
            `${HOST}/EducationalPlans/plan`,
            requestBody,
            {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": `${HOST}`,
                },
            }
        )
    }
    };

export default API;