import {Navbar} from "@/components/Navbar/Navbar";
import {HomeContainer} from "@/styles/Home.styles";
import Head from "next/head";
import {Advertisement} from "@/components/Advertisement/Advertisement";
import {SearchBar} from "@/components/Search/SearchBar/SearchBar";

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
                <SearchBar />
            </HomeContainer>
        </>
    )
}
