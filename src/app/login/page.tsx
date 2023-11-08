'use client';

import React, {FormEvent, useCallback, useState} from 'react';
import styles from './styles/login.module.scss'
import {useRouter} from "next/navigation";
import {ClassicInput} from "@shared/inputs/api";
import {ValidationError} from "@shared/errors/api";
import ClassicButton from "@shared/buttons/classic/ClassicButton";
import {AuthController} from "../../lib/controllers/auth/auth.controller";

const Page = () => {

    const router = useRouter();

    const [user, setUser] = useState({
        email: 'chad@nure.ua',
        password: 'hello.world_123',
    });
    const [error, setError] = useState({
        password: false,
        email: false,
    })
    const apply = async (e: FormEvent) => {
        e.preventDefault();

        const res = await AuthController.signIn(user);
        if (!res.error) {
            window.localStorage.setItem('token', res.token);
            router.push('/');
        } else {
            setError(res.error);

        }
        console.log(res);
    }
    return (
        <section className={styles.section}>
            <div className={styles.section__content}>
                <h1 className={styles.section__content__title}>Login</h1>
                <form className={styles.form}>
                    <div className={styles.form__block}>
                        <ClassicInput
                            value={user.email}
                            setValue={(value) => setUser({...user, email: value})}
                        >Email</ClassicInput>
                        {error.email && <ValidationError className={styles.form__block_error}>invalid value</ValidationError>}
                    </div>
                    <div className={styles.form__block}>
                        <ClassicInput
                            value={user.password}
                            setValue={(value) => setUser({...user, password: value})}
                        >Password</ClassicInput>
                        {error.password && <ValidationError className={styles.form__block_error}>invalid value</ValidationError>}
                    </div>
                    <ClassicButton onClick={apply}>Apply</ClassicButton>
                </form>
            </div>
        </section>
    );
};

export default Page;