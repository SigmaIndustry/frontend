'use client'
import React, {useState} from 'react';
import {ClassicDialog} from "@shared/dialogs/api";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

enum AuthFormTypes {
    SIGN_IN = 'sign_in',
    SIGN_UP = 'sign_up',
}

export enum AuthUser {
    CUSTOMER = 'Customer',
    SERVICE_PROVIDER = 'Service provider',
}

type AuthSectionProps = {
    setOpen: (isOpen: boolean) => void
}
const AuthSection = ({setOpen}: AuthSectionProps) => {
    const [authForm, setAuthForm] = useState(AuthFormTypes.SIGN_IN);
    return (
        <ClassicDialog onClick={() => setOpen(false)}>
            {authForm === AuthFormTypes.SIGN_IN
                ? <SignIn
                    onHavingAccount={() => setAuthForm(AuthFormTypes.SIGN_UP)}
                />
                : <SignUp
                    onHavingAccount={() => setAuthForm(AuthFormTypes.SIGN_IN)}
                />
            }
        </ClassicDialog>
    );
};

export default AuthSection;