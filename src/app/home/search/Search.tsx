"use client"
import { ClassicInput } from '@shared/inputs/api';
import { SearchController } from 'lib/controllers/search/search.controller';
import React, {useState} from 'react';

type SearchForm = {
  querry:string;
}

const SearchComponent = () => {
  const [form, setForm] = useState<SearchForm>({
    querry:""
  })
  
  const searchFunc = async () =>{
  const res = await SearchController.search({
    querry: form.querry
  });
  console.log(res);
}


  return (
    <>
      <ClassicInput
      value={form.querry}
      setValue={(value) => setForm({...form, querry: value})}
      >Querry</ClassicInput>
      <button onClick={()=>{
        searchFunc()
      }}>search</button>
    </>
  );
};

export default SearchComponent;