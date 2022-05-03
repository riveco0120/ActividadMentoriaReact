import React,{Fragment} from 'react'

const Usuaio = ({usuario}) => {

    return ( 
        <Fragment>
              <hr />
            <div>
            <img src="http://via.placeholder.com/64" alt="" />
                <div>
                    <h5>{usuario.nombre}</h5>
                </div>
            </div>
        </Fragment>
     );
}
 
export {Usuaio};