'use client'
import React, {useState} from 'react';
import {ClassicButton} from "@shared/buttons/api";
import EditProfileDialog from "./EditProfileDialog";
import {ClassicDialog} from "@shared/dialogs/api";

const EditProfile = ({first_name, last_name}: {
    first_name: string,
    last_name: string,
}) => {
    const [editForm, setEditForm] = useState(false);
    const edit = () => {
        setEditForm(true);
    }

    const changePassword = () => {

    }

    const cancel = () => {
        setEditForm(false);
    }

    const apply = () => {

        setEditForm(false);
    }
    return (
        <>
            <ClassicButton onClick={edit}>Edit profile</ClassicButton>
            <ClassicButton variant={'danger'} onClick={changePassword}>Change password</ClassicButton>
            {editForm && <ClassicDialog>
                <EditProfileDialog
                    cancel={cancel}
                    apply={apply}
                    first_name={first_name}
                    last_name={last_name}
                />
            </ClassicDialog>}
        </>
    );
};

export default EditProfile;