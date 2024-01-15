import { useUsers } from "../hooks/useUsers"
import { User } from "../interfaces/reqRes"

export const Users = () => {

    const { users, previousPage, nextPage } = useUsers()

    const renderItem = (user: User) => {
        return (
            <tr key={user.id.toString()}>
                <td>
                    <img
                        src={user.avatar}
                        alt={user.first_name}
                        style={{ width: 50, borderRadius: 100 }}
                    />
                </td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Users:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(renderItem)
                    }
                </tbody>
            </table>

            <button
                className="btn btn-primary"
                onClick={previousPage}
            >
                Previous
            </button>

            &nbsp;

            <button
                className="btn btn-primary"
                onClick={nextPage}
            >
                Next
            </button>
        </>
    )
}
