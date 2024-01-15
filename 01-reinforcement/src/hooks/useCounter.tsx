import { useState } from "react"

export const useCounter = (initial: number = 10) => {
    const [value, setValue] = useState(initial)

    const acummulate = (num: number) => {
        setValue(value + num)
    }

    return {
        value,
        acummulate
    }
}
