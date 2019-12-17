import React from 'react'
import './auth_layout.css'

const AppLayout = ({children}) => {
    return(
        <div className="auth row justify-content-center">
            <div className="col-md-4">
            {children}
            </div>
        </div>
    );
} 

export default AppLayout;