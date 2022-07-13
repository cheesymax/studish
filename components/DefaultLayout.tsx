import Nav from "./nav";
import React, {createContext, ReactElement, useCallback, useState} from "react";
import Bar from "./Bar";
import ExampleModal from "./ExampleModal";

export const ModalContext = createContext({
                                              isModalOpen: false,
                                              updateContent: (value: JSX.Element) => {
                                                  return;
                                              },
                                              onClose: () => {
                                                  return;
                                              }
                                          });
// ReactModal.setAppElement(modalPortalId);
export default function DefaultLayout(props: DefaultLayoutProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(<ExampleModal/>);
    const updateModal = useCallback(
        (value: JSX.Element) => {
            setModalContent(value);
            setIsModalOpen(true)
        }, []
    );
    const closeModal = useCallback(
        () => {
            setIsModalOpen(false);
        },
        [],
    );

    // useEffect(() => {
    //     return () => {
    //         setIsModalOpen(true);
    //     };
    // }, [modalContent]);


    return <>
        <div className=" w-screen h-screen flex flex-col">
            {/*<div id={modalPortalId}/>*/}
            {/*<ReactModal*/}
            {/*    isOpen={isModalOpen}*/}
            {/*    // id={modalPortalId}*/}
            {/*    ariaHideApp={false}*/}
            {/*>*/}
            {/*        /!*{modalContent}*!/*/}
            {/*    <ExampleModal />*/}
            {/*</ReactModal>*/}
            <ModalContext.Provider value={{
                isModalOpen: isModalOpen,
                updateContent: updateModal,
                onClose: closeModal
            }}>
                <Nav label={props.label}/>
                <Bar label={props.label}/>
                <div className="relative top-20 mt-6">
                    {props.children}
                </div>
            </ModalContext.Provider>
        </div>
    </>;
}

export interface DefaultLayoutProps {
    children?: ReactElement | ReactElement[],
    label: string
}
