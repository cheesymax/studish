import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import React from 'react'
import DefaultLayout from "../components/DefaultLayout";

export default function Home() {
  return(
    <>
      <DefaultLayout label={"Расписание"}>
      </DefaultLayout>
    </>
  )
}
