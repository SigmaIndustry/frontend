'use client';
import React, {useEffect, useState} from 'react';
import {ServiceProvider, User} from "../../lib/entities/User";
import {AuthController} from "../../lib/controllers/auth/auth.controller";
import {useRouter} from "next/navigation";
import styles from './styles/profile.module.scss';
import EditProfile from "./edit/EditProfile";
import Image from "next/image";

const Page = () => {
    const [user, setUser] = useState<User>({
        email: '',
        last_name: '',
        first_name: '',
        birth_date: '',
        sex: '',
        profile_picture: '',
    });
    const [provider, setProvider] = useState<ServiceProvider | null>(null);

    const router = useRouter();
    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token) {
            AuthController.verify(token)
                .then(res => {
                    console.log(res);
                    if (res.error) {
                        router.push('/');
                    } else {
                        setUser(res.user);
                        setProvider(res.service_provider);
                    }
                })
        } else {
            router.push('/login');
        }
    }, []);
    return (
        <section className={styles.profile}>
            <div className={styles.profile__inner}>
                <div className={styles.profile__left_block}>
                    <div className={styles.profile__avatar}>
                        {user.profile_picture
                            ? <Image src={user.profile_picture} alt={''} width={100} height={100} style={{borderRadius: '50%'}}/>
                            : <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="user-circle-2" transform="translate(-2 -2)">
                                        <path id="secondary" fill="#2ca9bc" d="M12,3A9,9,0,0,0,5.55,18.27a7,7,0,0,1,4.28-3.92h0a4,4,0,1,1,4.34,0h0a7,7,0,0,1,4.28,3.92A9,9,0,0,0,12,3Z"></path>
                                        <path id="primary" d="M16,11a4,4,0,1,1-4-4A4,4,0,0,1,16,11Zm-1.83,3.35a3.95,3.95,0,0,1-4.34,0,7,7,0,0,0-4.28,3.92,9,9,0,0,0,12.81.09l.09-.09a7,7,0,0,0-4.28-3.92ZM21,12h0a9,9,0,0,0-9-9h0a9,9,0,0,0-9,9H3a9,9,0,0,0,9,9h0a9,9,0,0,0,9-9Z" fill="none" stroke={'#797c7b'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                    </g>
                                </g>
                            </svg>
                        }
                    </div>
                    <div>
                        <p className={styles.profile__email}>Email - {user.email}</p>
                    </div>
                    <div className={styles.profile__options}>
                        <EditProfile
                            first_name={user?.first_name}
                            last_name={user?.last_name}
                        />
                    </div>
                </div>
                <div className={styles.profile__right_block}>
                    <h3 className={styles.profile__title}>Private information</h3>
                    <div className={styles.profile__info_blocks_wrapper}>
                        <div className={styles.profile__info_block}>
                            <p className={styles.profile__info_item}><span>Name:</span> {user.first_name}</p>
                            <p className={styles.profile__info_item}><span>Surname:</span> {user.last_name}</p>
                        </div>
                        <div className={styles.profile__info_block}>
                            <p className={styles.profile__info_item}><span>Sex:</span> {user.sex}</p>
                            <p className={styles.profile__info_item}><span>Birthday:</span> {user.birth_date}</p>
                        </div>
                    </div>

                    {provider &&
                        <>
                            <h3 className={styles.profile__title}>Provider information</h3>
                            <div className={styles.profile__info_blocks_wrapper}>
                                <div className={styles.profile__info_block}>
                                    <p className={styles.profile__info_item}><span>Business:</span> {provider.business_name}</p>
                                    <p className={styles.profile__info_item}><span>Phone:</span> {provider.phone_number}</p>
                                </div>
                                <div className={styles.profile__info_block}>
                                    <p className={styles.profile__info_item}><span>City:</span> {provider.city}</p>
                                    <p className={styles.profile__info_item}><span>Work time:</span> {provider.work_time}</p>
                                </div>
                            </div>
                            <p className={styles.profile__info_description_title}>Description</p>
                            <p className={styles.profile__info_description}>{provider.description}</p>
                        </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Page;