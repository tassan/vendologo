import {Navbar} from "@/components/Navbar/Navbar";
import {HomeContainer} from "@/styles/Home.styles";
import Head from "next/head";
import React from "react";
import {SearchEstateForm} from "@/components/Search";


export default function Home() {
    return (
        <>
            <Head>
                <title>Vendo Logo - Anunciou. Vendeu.</title>
                <meta name="description" content="Vendo Logo - Anunciou. Vendeu."/>
                <link rel="icon" href="/vendologo_favicon.png"/>
            </Head>
            <HomeContainer>
                <Navbar/>
                <SearchEstateForm />
            </HomeContainer>
        </>
    )
}
