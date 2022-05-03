import React,{Fragment} from 'react'

const Avatar = ({urlImagne}) => {

    

    return ( 
        <Fragment>
            <img src={urlImagne} alt="" />
        </Fragment>
     );
}
 
export {Avatar};