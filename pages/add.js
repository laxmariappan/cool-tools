import { useState } from 'react';
import Header from '../components/Header';
import { useForm } from "react-hook-form";
import { tags } from '../lib/menu'
import Head from 'next/head'
export default function Form() {
  const [message, setMessage] = useState(null);
  const { register, handleSubmit } = useForm();
 const onSubmit = async function(data){
  const res = await fetch('/api/add', {
    body: JSON.stringify({
      name: data.name,
      link: data.link,
      description: data.description,
      tags: data.tags
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })

  const result = await res.json()
  setMessage(result.msg);
  
 }
    
  
    return (
      <>
 <Header/>
    <div className="flex flex-col   py-2 bg-gray-100">
      <Head>
        <title>Add a tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-4 py-12 mx-auto max-w-7xl min-h-screen">
  <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
  
    
  <div>
  <h1 className="mb-4 -mt-3 text-2xl font-extrabold leading-snug tracking-tight text-left text-gray-900 md:text-4xl">Add a Tool</h1>

<form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
  <label className="name">
    <span className="block mb-1  font-medium text-gray-700">Name</span>
    <input {...register("name")} className="form-input border-gray-100" id="name" name="name" type="text" placeholder="Remove.bg"  required />
  </label>
  <label className="link">
    <span className="block mb-1  font-medium text-gray-700">Link</span>
    <input {...register("link")} className="form-input" type="text"  id="link" name="link" placeholder="https://remove.bg" required />
  </label>
  <label className="description">
    <span className="block mb-1 font-medium text-gray-700">Description</span>
    <textarea {...register("description")} className="form-input" id="description" name="description"  placeholder="Removes background from photos" ></textarea>
  </label>
  <label className="tags">Tags</label><br/>
  <div className="grid grid-cols-3 gap-1 items-center ">
  {
     tags?.map(function(menu,index){
       return(
         <>
        <div  key={menu}>
        <input
       type="checkbox"
        value={menu}
        className="form-checkbox border rounded text-purple-600"
        {...register("tags", {
        
        })}
      /><label htmlFor={menu} className="pl-2 ">{menu}</label>
      </div>
      </>
        )
     })
     }
  </div>
  
  <input type="submit" className="w-full btn bg-purple-700 btn-lg text-white" value="Add Tool" />
  <p className="p5 text-2xl">{message}</p>
</form>
  </div>
  <div className="grid place-items-center	">
  <section>
    <img src="/list.png"/>
  <div className="flex space-x-3 ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-6 h-6 mt-1 text-purple-700">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <div>
        <h2 className="text-xl font-medium text-purple-700">Every tool counts</h2>
        <p className="mt-1 text-gray-700">Add any tool that you find useful</p>
      </div>
    </div>
    <div className="flex space-x-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-6 h-6 mt-1 text-purple-700">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <div>
        <h2 className="text-xl font-medium text-purple-700">Description is optional</h2>
        <p className="mt-1 text-gray-700">Just add name, link and tags.</p>
      </div>
    </div>
    <div className="flex space-x-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-6 h-6 mt-1 text-purple-700">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <div>
        <h2 className="text-xl font-medium text-purple-700">Got suggestions?</h2>
        <p className="mt-1 text-gray-700">Feel free to share your suggestions</p>
      </div>
    </div>
    </section>
  </div>
    <div>
    </div>
  </div>
</section>

      
      
      
    </div>
      </>
    )
  }