import React, { createContex, useState } from 'react'

const CarContext = createContex();

export default function CarProvider( { children } ){
    const [carros, setCarros] = useState ([])

    return (
        <CarContext.Provider value={{ carros, setCarros }}>
            {children}
        </CarContext.Provider>
    )
}
export { CarContext }