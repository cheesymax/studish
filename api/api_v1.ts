import axios from "axios";
import {ScheduleRequest} from "../models/scheduleRequest";
import {PlanRequest} from "../models/planRequest";
import {AllMArksRequest} from "../models/allMArksRequest";
import {YearMarksRequest} from "../models/YearMarksRequest";
import {PeriodMarksRequest} from "../models/PeriodMarksRequest";
import {SubjectMarksByPeriod} from "../models/SubjectMarksByPeriod";

// const HOST = "https://studash-service.herokuapp.com";
const HOST = "https://000f-37-112-0-81.ngrok.io";
const HEADERS = {
                    "Access-Control-Allow-Origin": `${HOST}`, // allow any origin
                }

const API = {
    scheduleOnDay:function(requestBody:ScheduleRequest) {
        return axios.post(
            `${HOST}/Schedule/onDate`,
            requestBody,
            {
                method: "POST",
                headers: HEADERS,
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
                headers: HEADERS,
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
                headers: HEADERS,
            }
        )
    },
    allMarks: function (requestBody: AllMArksRequest)
    {
        return axios.post(
            `${HOST}/Marks`,
            requestBody,
            {
                method: "POST",
                headers: HEADERS,
            }
        )
    },
    yearMarks: function (requestBody: YearMarksRequest)
    {
        return axios.post(
            `${HOST}/Marks/Year`,
            requestBody,
            {
                method: "POST",
                headers: HEADERS,
            }
        )
    },
    periodMarks: function (requestBody: PeriodMarksRequest)
    {
        return axios.post(
            `${HOST}/Marks/Period`,
            requestBody,
            {
                method: "POST",
                headers: HEADERS,
            }
        )
    },
    subjectMarksByPeriod: function (requestBody: SubjectMarksByPeriod)
    {
        return axios.post(
            `${HOST}/Marks/Subject`,
            requestBody,
            {
                method: "POST",
                headers: HEADERS,
            }
        )
    },
};

export default API;
