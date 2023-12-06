import React, {useEffect, useState} from 'react';
import {ClassicDialog} from "@shared/dialogs/api";
import {ClassicInput, ClassicTextArea} from "@shared/inputs/api";
import {ClassicSelect} from "@shared/selects/api";
import {CategoryController} from "../lib/controllers/category/category.controller";
import {ClassicButton} from "@shared/buttons/api";

const CreateServiceModal = () => {
    const [service, setService] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
    });
    const [categories, setCategories] = useState([] as any[]);

    useEffect(() => {
        CategoryController.getCategories().then((res: any) => {
            console.log(res);

            setCategories(Object.keys(res.data).map(item => ({
                title: res.data[item],
                value: item
            })))
        })
    }, []);

    const apply = () => {

    }

    const cancel = () => {

    }

    return (
        <ClassicDialog>
            <form className={'space-y-4 bg-gray-900 p-7 rounded-2xl min-w-[500px]'}>
                <h1 className={'text-2xl text-center font-bold'}>Create a service</h1>
                <ClassicInput
                    value={service.name}
                    setValue={(value) => setService({...service, name: value})}
                >
                    Name
                </ClassicInput>
                <ClassicInput
                    value={service.price}
                    setValue={(value) => setService({...service, price: value})}
                >
                    Price
                </ClassicInput>
                <ClassicSelect
                    label={'Category'}
                    placeholder={'Category'}
                    items={categories}
                    setSelectedItem={(item: any) => setService({...service, category: item})}
                />
                <ClassicTextArea
                    minHeight={200}
                    value={service.description}
                    setValue={(value: any) => setService({...service, description: value})}
                >
                    Description
                </ClassicTextArea>
                <div className={'flex gap-3'}>
                    <ClassicButton onClick={cancel} variant={'danger'}>Cancel</ClassicButton>
                    <ClassicButton onClick={apply}>Apply</ClassicButton>
                </div>
            </form>
        </ClassicDialog>
    );
};

export default CreateServiceModal;