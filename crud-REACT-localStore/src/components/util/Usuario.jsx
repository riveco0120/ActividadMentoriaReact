import React, { Fragment, useState } from 'react'
import { Avatar } from './Avatar';

const Usuaio = ({ usuario }) => {


    const [responsable, setResponsable] = useState("");


    return (
        <Fragment>
            <br />
            <hr />
            <div>
                <Avatar urlImagne={usuario.urlImagne} />

                <div>
                    <h5>Responsable: {responsable}</h5>
                </div>
                <select id="lang" value={responsable}
                    onChange={e => setResponsable(e.target.value)}
                    onBlur={e => setResponsable(e.target.value)}>
                    <option value="Select">Select</option>
                    <option value="Andres">Andres</option>
                    <option value="Sandy">Sandy</option>
                    <option value="Paula">Paula</option>
                    <option value="Jose">Jose</option>
                </select>
            </div>
        </Fragment>
    );
}

export { Usuaio };