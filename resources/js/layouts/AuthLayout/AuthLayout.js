import React from 'react'
import './auth_layout.css'

const AppLayout = ({children}) => {
    return(
        <div className="auth">
            {children}
        </div>
    );
} 

export default AppLayout;