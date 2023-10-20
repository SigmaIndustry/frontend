'use client'
import React, {useEffect} from 'react';
import styles from './layoutContainer.module.scss';
import '@radix-ui/themes/styles.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MainTheme from "../theme/MainTheme";

const LayoutContainer = ({children}) => {

    return (
        <>
            <Header/>
            <main className={styles.layoutContainer}>
                <div className={styles.layoutContainer__inner}>
                    <MainTheme>
                        {children}
                    </MainTheme>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default LayoutContainer;