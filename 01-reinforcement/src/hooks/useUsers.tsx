import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResList, User } from "../interfaces/reqRes"

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])

    const refPage = useRef(0)

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const resp = await reqResApi.get<ReqResList>('/users', {
            params: {
                page: refPage.current
            }
        })

        if (resp.data.data.length > 0) {
            setUsers(resp.data.data)
        } else {
            refPage.current--
            alert('No more users')
            return
        }
    }

    const previousPage = async () => {
        if (refPage.current > 1) {
            refPage.current--
            loadUsers()
        } else {
            alert('No more users')
            return
        }
    }

    const nextPage = async () => {
        refPage.current++
        loadUsers()
    }

    return {
        users,
        previousPage,
        nextPage
    }

}
