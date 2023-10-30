import Image from 'next/image'
import ProfileButton from "./home/auth/ProfileButton";
import Search from './home/search/Search';

export default function Home() {
    return (
    <section style={{width:"100%"}}>
        ...content
        <ProfileButton/>
        <Search/>
    </section>
    )
}
