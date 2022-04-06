import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import React from 'react'

export default function Home() {
  return(
    <>
      <Nav label="Расписание"/>
      <div className="wrapper w-full h-[10000px]">

      </div>
    </>
  )
}
