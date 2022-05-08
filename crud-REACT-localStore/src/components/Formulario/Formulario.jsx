import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form';

const Formulario = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Fragment>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Ingresa tu nombre' className='form-control my-lg-2 ' {...register("example", { required: true })} />
        {errors.example && <span>Este campo es requerido</span>}

        <input placeholder='Ingresa tu profesion' className='form-control my-2' {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>Este campo es requerido</span>}
        <br />
        <button className='btn-primary'>Iniciar seccion</button>
      </form>

    </Fragment>
  );
}

export { Formulario };