import React from 'react'

const Greet = (properties) => {
    return (
        <div>
            <h1>From Greet, Hello, {properties.name}!</h1>
            {properties.children}
        </div>
    )
}

export default Greet