import React from 'react';
import { Fragment} from 'react/cjs/react.production.min';
import { Usuaio } from '../util/Usuario';
import '../../stilos.css';

function TodoItem(props) {


  return (
    <Fragment>
   <Usuaio />
     
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
    <button  he className="delete"
        onClick={props.onDelete}>Eliminar</button>
    </Fragment>

  );
}

export { TodoItem };
