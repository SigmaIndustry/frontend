'use client';
import React, {FormEvent, useState} from 'react';
import {ClassicDialog} from "@shared/dialogs/api";
import styles from './styles/rate.module.scss';
import {ClassicInput, ClassicTextArea} from "@shared/inputs/api";
import ClassicButton from "@shared/buttons/classic/ClassicButton";

const OrderModal = ({open, setOpen, serviceId}: {
    open: boolean,
    setOpen: (bool: boolean) => void,
    serviceId: number
}) => {
    const apply = async (e: FormEvent) => {
        const token = window.localStorage.getItem('token');
        if (!token) {
            return;
        }
    }

    const [orderMsg, setOrderMsg] = useState('');
    return (
        open && <ClassicDialog>
            <div className={styles.section__content}>
                <h1 className={styles.section__content__title}>Order</h1>
                <form className={styles.form}>
                    <div className={'my-10 w-full flex flex-col items-center gap-4'}>
                        <ClassicTextArea minHeight={200} value={orderMsg} setValue={setOrderMsg}>
                            Order
                        </ClassicTextArea>
                    </div>
                    <div className={'flex gap-3 w-full'}>
                        <ClassicButton onClick={() => setOpen(false)}>Cancel</ClassicButton>
                        <ClassicButton onClick={apply}>Apply</ClassicButton>
                    </div>
                </form>
            </div>
        </ClassicDialog>
    );
};

export default OrderModal;