import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Data } from '../utilites/Data';
import {Product_Details} from './Productdetial';


const Products = () => {
  const navigate = useNavigate();
  const navigate_handle = (id) =>{
    console.log(id)
   navigate(`/${id}`)

    
    
    // navigate('/products/21')
    // navigate(`/`)
  }

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {
        Data.map((pro, index) => {
            const { id, title, description, image } = pro
            return (
                <div key={id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img src={image} alt="Description" class="w-full h-48 object-cover" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                        <a href="#" onClick={() => navigate_handle(id)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            );
        })
    }
</div>
)};

export  {Products};
