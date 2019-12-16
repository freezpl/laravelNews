import React from 'react'
import './common_layout.css'

const CommonLayout = ({children}) => {
    return(
        <div className="common container-fluid">
            {children}
        </div>
    );
} 

export default CommonLayout;