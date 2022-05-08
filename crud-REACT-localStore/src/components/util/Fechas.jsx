import React, { Fragment, useState } from 'react'
import { DatePicker } from '@material-ui/pickers';
import '../../stilos.css';


const Fechas = () => {



    const [fecha, setFecha] = useState(new Date())


    return (
        <Fragment>
            <div className='contenedor'>
                <div className='grupo'>
                    <label>Fecha de entrega: </label>
                    <DatePicker value={fecha} onChange={setFecha} />
                </div>
            </div>
        </Fragment>
    );
}

export { Fechas };