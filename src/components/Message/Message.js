import React from 'react'
import { Alert } from 'react-bootstrap'

import './Message.css'

function Message({variant, children}) {
    return (
        <Alert className='error-message' variant={variant}>
            {children}
        </Alert>
    )
}

export default Message