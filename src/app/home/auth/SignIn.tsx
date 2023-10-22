import React, {useState} from 'react';
import styles from './styles/auth-form.module.scss';
import {ClassicInput} from "@shared/inputs/api";
import {ClassicButton} from "@shared/buttons/api";
import {AuthUser} from "./AuthSection";
import {AuthController} from "../../../lib/controllers/auth.controller";

type SignInProps = {
    onHavingAccount: () => void;
}
type SignInForm = {
    email: string;
    password: string;
}
const SignIn = ({onHavingAccount}: SignInProps) => {
    const [form, setForm] = useState<SignInForm>({
        email: 'chad@nure.ua',
        password: 'hello.world_123'
    });
    const signIn = async () => {
        if (!form.email || !form.password) {
            return;
        }
        const res = await AuthController.signIn(form);

        console.log(res);
    }

    return (
        <div className={styles.form}>
            <div className={styles.form__inner}>
                <h2 className={styles.form__title}>Sign in as {AuthUser.CUSTOMER}</h2>
                <div className={styles.form__inputs}>
                    <ClassicInput
                        value={form.email}
                        setValue={(value) => setForm({...form, email: value})}
                    >Email</ClassicInput>
                    <ClassicInput
                        value={form.password}
                        setValue={(value) => setForm({...form, password: value})}
                    >Password</ClassicInput>
                </div>
                <div className={styles.form__btns}>
                    <ClassicButton onClick={signIn}>Continue</ClassicButton>
                    <button className={styles.form__btn}
                            onClick={onHavingAccount}
                    >
                        I already have account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;