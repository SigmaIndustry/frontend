import React, {useState} from 'react';
import styles from "./styles/auth-form.module.scss";
import signUpStyles from "./styles/sign-up.module.scss";
import {ClassicInput} from "@shared/inputs/api";
import {ClassicButton} from "@shared/buttons/api";
import {AuthUser} from "./AuthSection";
import {ClassicCalendar} from "@shared/calendars/api";
import {RadioGroup} from "@shared/selects/api";
import genders from "@assets/data/genders";

type SignUpProps = {
    onHavingAccount: () => void;
}

type SignInForm = {
    name: string;
    surname: string;
    sex: string;
    role: string;
    email: string;
    password: string;
    birthday: Date | null;
}


const SignUp = ({onHavingAccount}: SignUpProps) => {

    const [form, setForm] = useState<SignInForm>({
        name: '',
        surname: '',
        sex: '',
        role: AuthUser.CUSTOMER,
        email: '',
        password: '',
        birthday: null
    });
    const signUp = async () => {
        console.log(form);
    }

    return (
        <div className={styles.form}>
            <div className={styles.form__inner}>
                <h2 className={styles.form__title}>Sign Up as {form.role}</h2>
                <div className={styles.form__inputs}>
                    <div className={signUpStyles.signUp__block}>
                        <ClassicInput
                            value={form.name}
                            setValue={(value) => setForm({...form, name: value})}
                        >Name</ClassicInput>
                        <ClassicInput
                            value={form.surname}
                            setValue={(value) => setForm({...form, surname: value})}
                        >Surname</ClassicInput>
                    </div>
                    <div className={signUpStyles.signUp__block}>
                        <ClassicInput
                            value={form.email}
                            setValue={(value) => setForm({...form, email: value})}
                        >Email</ClassicInput>
                        <ClassicInput
                            value={form.password}
                            setValue={(value) => setForm({...form, password: value})}
                        >Password</ClassicInput>
                    </div>
                </div>
                <div className={signUpStyles.signUp__gender}>
                    <h4 className={signUpStyles.signUp__gender__title}>Your gender</h4>
                    <RadioGroup
                        items={genders}
                        setSelectedItem={(value) => setForm({...form, sex: value})}
                        defaultValue={genders[0].value}
                    />
                </div>
                <ClassicCalendar
                    date={form.birthday}
                    setDate={(date) => setForm({...form, birthday: date})}
                >
                    Birthday &mdash;
                </ClassicCalendar>
                <div className={styles.form__btns}>
                    <ClassicButton onClick={signUp}>Continue</ClassicButton>
                    <button className={styles.form__btn}
                            onClick={onHavingAccount}
                    >
                        I have no account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;