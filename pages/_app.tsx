import "../styles/globals.css";
import type {AppProps} from "next/app";
import {modalPortalId} from "../components/Modal";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <div id={modalPortalId}/>
    <Component {...pageProps} /></>
}

export default MyApp
