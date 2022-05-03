import React,{Fragment,useState} from 'react'

const Avatar = () => {

    const [imagen, setImagen] = useState("http://via.placeholder.com/64");

    const selecionar=(valor)=>{
        setImagen(valor.target.value)
    }
    const confirmar=(valor)=>{
        setImagen(valor.target.value)
    }


    return ( 
        <Fragment>
            <img src={imagen} alt="" />
            <select id="lang" value={imagen}
                    onChange={selecionar}
                    onBlur={confirmar}>
                    <option value="Select">Select</option>
                    <option value="https://acortar.link/omIIxc">Serio</option>
                    <option value="https://avatars.miarroba.st/Qy2weTV.png">Feliz</option>
                    <option value="https://acortar.link/j8ilfn">Perdido</option>
                    <option value="https://acortar.link/hTTVub">Jediondo</option>
                </select>
           
        </Fragment>
     );
}
 
export {Avatar};