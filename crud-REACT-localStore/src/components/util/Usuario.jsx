import React, { Fragment, useState } from 'react'
import { Avatar } from './Avatar';

const Usuaio = ({ usuario }) => {


    const [responsable, setResponsable] = useState("Richard Vellojin");

    const selecionar=(valor)=>{
        setResponsable(valor.target.value)
    }
    const confirmar=(valor)=>{
        setResponsable(valor.target.value)
    }

    return (
        <Fragment>

            <h1>Actividad pendiente</h1>
            
            <hr />
            <div>
                <Avatar/>

                <div>
                    <h5>Responsable: {responsable}</h5>
                </div>
                Selecione<select id="lang" value={responsable}
                    onChange={selecionar}
                    onBlur={confirmar}>
                    <option value={responsable}>Select</option>
                    <option value="Andres">Andres perez</option>
                    <option value="Sandy">Sandy camila</option>
                    <option value="Paula">Sergio rodigues</option>
                    <option value="Jose">Jose maria</option>
                </select>
            </div>
        </Fragment>
    );
}

export { Usuaio };