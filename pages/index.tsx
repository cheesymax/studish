import React from 'react'
import DefaultLayout from "../components/DefaultLayout";
import Loader from "../components/Loader";

export default function Home() {
  return(
    <>
      <DefaultLayout label={""}>
          <Loader />
      </DefaultLayout>
    </>
  )
}
