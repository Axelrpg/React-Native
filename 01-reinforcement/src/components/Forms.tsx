import { useForm } from "../hooks/useForm"

export const Forms = () => {

    const { state, onChange } = useForm({
        email: 'test@test.com',
        password: '123456'
    })

    return (
        <>
            <h3>Forms</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={state.email}
                onChange={({ target }) => onChange(target.value, 'email')}
            />

            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={state.password}
                onChange={({ target }) => onChange(target.value, 'password')}
            />

            <code>
                <pre>
                    {JSON.stringify(state, null, 2)}
                </pre>
            </code>
        </>
    )
}
