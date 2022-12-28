import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

const schema = yup.object({
    unitInStock: yup.number().required(),
    unitPrice: yup.number().required(),
    productName: yup.string().required(),
  }).required();

const HookForm = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => {
        console.log(data)
        axios.post('https://northwind.vercel.app/api/products', data)
      };
    
    //   useEffect(() => {
    //   }, [])
      
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("productName")} placeholder='Product Name' />
          <p>{errors.productName?.message}</p>
            
          <input {...register("unitPrice")} placeholder='Unit Price'  />
          <p>{errors.unitInStock?.message}</p>

          <input {...register("unitInStock")} placeholder='Unit in Stock'  />
          <p>{errors.unitInStock?.message}</p>
          
          <input type="submit" />
        </form>
      );
}

export default HookForm