'use client';
import React, {useState} from 'react';
import {ClassicInput} from "@shared/inputs/api";

const Page = () => {
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState()
    return (
        <div className={'bg-[#111113] w-full flex flex-col justify-center items-center'}>
            <div>
                <ClassicInput
                    value={email}
                    setValue={setEmail}
                >Email</ClassicInput>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Page;