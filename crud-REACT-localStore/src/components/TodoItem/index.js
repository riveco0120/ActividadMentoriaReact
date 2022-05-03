import React, { useState } from 'react';
import { Fragment} from 'react/cjs/react.production.min';
import { Usuaio } from '../util/Usuario';
import { Fechas } from '../util/Fechas';
import '../../stilos.css';

function TodoItem(props) {

  const [numero,setNumero]=useState(0);
  const [numeroDos,setNumeroDos]=useState(0);

  const meGusta =()=>{
    setNumero(numero+1)
  }

  const noMeGusta=()=>{
    setNumeroDos(numeroDos+1)
  }

  return (
    <Fragment>

  <div>
  <Usuaio />
   <Fechas/>
  </div>
     
    <li className="TodoItem">
      
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text} 
</p>
     
    
    </li>
   <p className='TodoItem-p'>Me gusta:{" "}{numero}</p>
   <p className='TodoItem-p'>No Me gusta:{" "}{numeroDos}</p>

    <button  className="btn-primary m4"
        onClick={props.onDelete}>Eliminar tarea </button>
   <button className="btn-primary" onClick={meGusta}>Megusta</button>
   <button className="btn-primary" onClick={noMeGusta}>No me gusta</button>
    </Fragment>

  );

}

export { TodoItem };
