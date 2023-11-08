"use client"
import { ClassicInput } from '@shared/inputs/api';
import { SearchController } from 'lib/controllers/search/search.controller';
import React, {useEffect, useState} from 'react';
import ServiceCard from './ServiceCard';
import {ClassicButton} from "@shared/buttons/api";
import {any} from "prop-types";
import {Service} from "../../../lib/entities/Service";

type SearchForm = {
    query: string;
}

const SearchComponent = () => {
    const [form, setForm] = useState<SearchForm>({
        query: ""
    })


    const [services, setServices] = useState<Service[]>([]);

    const searchFunc = async () => {
        try {
            const res: any = await SearchController.search({
                query: form.query
            });

            console.log(res.data.results)
            const results = res.data.results;
            setServices(results);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        searchFunc();

    }, [form.query]);
    return (
        <>
            <div className={'flex mt-10 gap-4 mb-10 bg-inherit'}>
                <div className={'w-full bg-inherit'}>
                    <ClassicInput
                        value={form.query}
                        setValue={(value) => setForm({ ...form, query: value })}
                    >
                        Title
                    </ClassicInput>
                </div>
                <div className={'h-[55px]'}>
                    <ClassicButton onClick={searchFunc}>Search</ClassicButton>
                </div>
            </div>

            {services.length > 0 ? (
                services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))
            ) : (
                <p>No results.</p>
            )}
        </>
    );
};

export default SearchComponent;