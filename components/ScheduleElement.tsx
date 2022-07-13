import React, {useContext} from "react";
import {IScheduleModel} from "../models/IScheduleModel";
import {ModalContext} from "./DefaultLayout";
import Modal from "./Modal";
import ExampleModal from "./ExampleModal";
import {PortalWithState} from "react-portal";

export default function ScheduleElement(props: ScheduleElementProps) {
    const modalContext = useContext(ModalContext);
    return (
        <li className={"flex justify-around content-around items-center  h-20 border-[1px] border-gray-300 rounded-xl mt-4"}>
            <div className={"m-2 flex  flex-col justify-around items-center"}>
                <p>{props.data.start_time.substring(0, props.data.start_time.length - 3)}</p>
                <div className={`bg-black h-[2px] w-4 rounded-xl m-[2px] flex-shrink-0`}/>
                <p>{props.data.end_time.substring(0, props.data.start_time.length - 3)}</p>
            </div>
            <span className={`m-2 w-36`}>
                {props.data.subject}
            </span>
            <div className={`m-2 text-center w-40`}>
                <p>Ауд</p>
                <p>{props.data.auditorium}</p>
            </div>
            {/*<button className={' flex-shrink-0 w-[32px] h-[32px] m-2'}>*/}
            {/*    {props.svg}*/}
            {/*</button>*/}
            <PortalWithState closeOnOutsideClick closeOnEsc>
                {({openPortal, closePortal, isOpen, portal}) => (
                    <React.Fragment>
                        <button className={" flex-shrink-0 w-[32px] h-[32px] m-2"} onClick={openPortal}>
                            {props.svg}
                        </button>
                        {portal(
                            // <p>
                            //     This is more advanced Portal. It handles its own state.{" "}
                            //     <button onClick={closePortal}>Close me!</button>
                            //     , hit ESC or
                            //     click outside of me.
                            // </p>
                            <ExampleModal />
                        )}
                    </React.Fragment>
                )}
            </PortalWithState>
        </li>
    );
}

export interface ScheduleElementProps {
    key?: number | string,
    data: IScheduleModel,
    svg: React.SVGProps<SVGSVGElement>
}

