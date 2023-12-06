'use client';
import Search from './home/search/Search';
import CreateServiceModal from "./CreateServiceModal";
import {useEffect, useState} from "react";

export default function Home() {
    const [_, set_] = useState(false);
    useEffect(() => {
        set_(true);
    }, []);
    return (
        <section style={{width:"100%", minHeight: '100vh', background: '#111113'}}>
            <Search/>
            {/*{_ && <CreateServiceModal/>}*/}
        </section>
    )
}
