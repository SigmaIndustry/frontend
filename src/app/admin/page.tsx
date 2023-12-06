'use client';
import React, {useEffect, useState} from 'react';
import {ClassicInput} from "@shared/inputs/api";
import {SearchController} from "../../lib/controllers/search/search.controller";
import {User} from "../../lib/entities/User";
import {ClassicButton} from "@shared/buttons/api";
import {AuthController} from "../../lib/controllers/auth/auth.controller";

const Page = () => {
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([])
    useEffect(() => {
        SearchController.getUsers()
            .then((res: any) => {
                if (!res.error) {
                    console.log(res);
                    setUsers(res.data);
                }
            })
    }, []);
    const banUser = async (user: User) => {
        const token = window.localStorage.getItem('token');
        if (token) {
            await AuthController.ban({token, email: user.email})
        }
        window.location.reload();

    }
    return (
        <div className={'min-h-screen bg-[#111113] w-full flex flex-col items-center mb-10'}>
            <h1 className={'text-3xl font-bold mt-5'}>Users</h1>
            <div className={'bg-inherit my-10'}>
                <ClassicInput
                    value={email}
                    setValue={setEmail}
                >Email</ClassicInput>
            </div>
            <div className={'space-y-5'}>
                {users.length > 0 && users.filter((user: User) => user.email !== 'admin@gmail.com')
                    .map((user: User, ind) =>
                    <div key={ind}
                         className={'flex items-center justify-center w-fit'}
                    >
                        <div className={'w-full min-w-[300px]'}>
                            <p>{user.first_name} {user.last_name}</p>
                            <p>{user.email}</p>
                        </div>
                        {user.is_banned
                            ? <div className={'w-full'}>
                                <p className={'text-red-700 ml-3 text-center'}>Banned</p>
                            </div>
                            : <div className={'w-fit'}>
                                <ClassicButton onClick={() => banUser(user)}>Ban</ClassicButton>
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;