import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {

    const { value, acummulate } = useCounter()

    return (
        <>
            <h3>Contador con hook: <small>{value}</small></h3>

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
