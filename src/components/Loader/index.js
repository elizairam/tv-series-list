import React from 'react';
import loading from '../../assets/loading.gif';

const Loader = props => (
    <div>
        <img 
        style={{width: 75}}
        alt="Loader icon"
        src={loading}/>
    </div>
)

export default Loader;