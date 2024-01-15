import { useState } from 'react';

export const Counter = () => {

    const [value, setValue] = useState(10)

    const acummulate = (num: number) => {
        setValue(value + num)
    }

    return (
        <>
            <h3>Contador: <small>{value}</small></h3>

            <button
                className='btn btn-primary'
                onClick={() => acummulate(1)}
            >
                +1
            </button>
            &nbsp;
            <button
                className='btn btn-primary'
                onClick={() => acummulate(-1)}
            >
                -1
            </button>
        </>
    )
}
