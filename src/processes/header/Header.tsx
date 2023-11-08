import React from 'react';
import styles from './header.module.scss';
import Logo from "@shared/logos/main/Logo";
import Link from "next/link";
import Menu from "./menu/Menu";
import ProfileButton from "./menu/ProfileButton";
import {selectUsername} from "../../lib/store/selectors/user.selectors";
import {useSelector} from "react-redux";

const Header = () => {
    const username = useSelector(selectUsername);

    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Logo/>
            </div>
            <nav className={styles.header__navbar}>
                <li className={styles.header__navbar_item}><Link href={'/'}>Home</Link></li>
            </nav>
            <div className={styles.header__profile_wrapper}>
                <Menu username={username}/>
            </div>
        </header>
    );
};

export default Header;