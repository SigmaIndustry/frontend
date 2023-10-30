"use client"
import { ClassicInput } from '@shared/inputs/api';
import { SearchController } from 'lib/controllers/search/search.controller';
import React, {useEffect, useState} from 'react';
import ServiceCard from './ServiceCard';

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
    <div style={{margin:"15px 0 0 0;"}}></div>
      <ClassicInput
        value={form.query}
        setValue={(value) => setForm({ ...form, query: value })}
      >
        Search
      </ClassicInput>
      <button onClick={searchFunc}>Search</button>

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