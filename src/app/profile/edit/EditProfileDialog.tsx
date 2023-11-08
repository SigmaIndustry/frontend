'use client';

import React, {useState} from 'react';
import styles from '../styles/edit-profile-dialog.module.scss';
import {ClassicInput, ClassicTextArea} from "@shared/inputs/api";
import {ClassicButton} from "@shared/buttons/api";

const EditProfileDialog = ({first_name, last_name, cancel, apply}: {
    first_name: string,
    last_name: string,
    cancel: () => void,
    apply: () => void
}) => {
    const [editUser, setEditUser] = useState<{
        first_name: string,
        last_name: string
    }>({
        first_name: '',
        last_name: ''
    })

    return (
        <div className={styles.dialog}>
            <h1 className={styles.dialog__title}>Editing</h1>
            <div className={styles.dialog__block}>
                <ClassicInput
                    value={editUser.first_name}
                    setValue={(first_name) => setEditUser({...editUser, first_name})}
                >
                    Name
                </ClassicInput>
                <ClassicInput
                    value={editUser.last_name}
                    setValue={(last_name) => setEditUser({...editUser, last_name})}
                >
                    Surname
                </ClassicInput>
            </div>
            <div className={styles.dialog__options}>
                <ClassicButton variant={'danger'} onClick={cancel}>Cancel</ClassicButton>
                <ClassicButton onClick={apply}>Apply</ClassicButton>
            </div>
        </div>
    );
};

export default EditProfileDialog;