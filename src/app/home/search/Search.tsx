"use client"
import { ClassicInput } from '@shared/inputs/api';
import { SearchController } from 'lib/controllers/search/search.controller';
import React, {useEffect, useState} from 'react';
import ServiceCard from './ServiceCard';
import {ClassicButton} from "@shared/buttons/api";

type SearchForm = {
  query: string;
}

type ServiceDto = {
  name: string;
  category: string;
  description: string;
  pictures: string[];
  price: number;
  provider: number;
  rating: number;
}

const SearchComponent = () => {
  const [form, setForm] = useState<SearchForm>({
    query: ""
  })

  
  const [services, setServices] = useState<ServiceDto[]>([]);
  
  useEffect(() => {
    const searchFunc = async () => {
      console.log(new Date().toISOString());
      try {
        const res = await SearchController.search({
          query: form.query
        }) as unknown as any;

        console.log(res);

        const results = res.data.results.map((result: any) => ({
          name: result.name,
          pictures: result.pictures,
          description: result.description,
          price: result.price,
          category: result.category,
          rating: result.rating,
          provider: result.provider
        }));

        setServices(results);
      } catch (e) {
        console.log(e);
      }
    };

    searchFunc(); 

  }, [form.query]); 

  const searchFunc = async () => {
    console.log(new Date().toISOString())
    try {
      const res = await SearchController.search({
        query: form.query
      }) as unknown as any;

      console.log(res)

      const results = res.data.results.map((result: any) => ({
        name: result.name,
        pictures: result.pictures,
        description: result.description,
        price: result.price,
        category: result.category,
        rating: result.rating,
        provider: result.provider
      }));

      setServices(results);
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <>
    <div style={{margin:"15px 0 0 0;", background: 'inherit'}}></div>
      <div className={'flex mt-10 gap-4 mb-10'}>
        <div className={'w-full'}>
          <ClassicInput
            value={form.query}
            setValue={(value) => setForm({ ...form, query: value })}
          >
            Search
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