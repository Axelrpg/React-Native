import { useState, useRef } from "react"

enum Operators {
    add,
    substract,
    multiply,
    divide
}

export const useCalculator = () => {

    const [result, setResult] = useState('0')
    const [previousResult, setPreviousResult] = useState('0')

    const lastOperation = useRef<Operators>()

    const clear = () => {
        setResult('0')
        setPreviousResult('0')
    }

    const buildNumber = (textNumber: string) => {
        // No aceptar doble punto
        if (result.includes('.') && textNumber === '.') return

        if (result.startsWith('0') || result.startsWith('-0')) {
            // Punto decimal
            if (textNumber === '.') {
                setResult(result + textNumber)

                // Evaluar si es otro cero, y hay un punto
            } else if (textNumber === '0' && result.includes('.')) {
                setResult(result + textNumber)

                // Evaluar si es diferente de cero y no tiene un punto
            } else if (textNumber !== '0' && !result.includes('.')) {
                setResult(textNumber)

                // Evitar 0000.0
            } else if (textNumber === '0' && !result.includes('.')) {
                setResult(result)
            } else {
                setResult(result + textNumber)
            }
        } else {
            setResult(result + textNumber)
        }
    }

    const positiveNegative = () => {
        if (result === '0') return

        if (result.includes('-')) {
            setResult(result.replace('-', ''))
        } else {
            setResult('-' + result)
        }
    }

    const deleteLastNumber = () => {
        let negative = ''
        let tempResult = result

        if (result.includes('-')) {
            negative = '-'
            tempResult = result.substr(1)
        }

        if (tempResult.length > 1) {
            setResult(negative + tempResult.slice(0, -1))
        } else {
            setResult('0')
        }
    }

    const changeNumberForPreviousResult = () => {
        if (result.endsWith('.')) {
            setPreviousResult(result.slice(0, -1))
        } else {
            setPreviousResult(result)
        }

        setResult('0')
    }

    const divide = () => {
        changeNumberForPreviousResult()
        lastOperation.current = Operators.divide
    }

    const multiply = () => {
        changeNumberForPreviousResult()
        lastOperation.current = Operators.multiply
    }

    const substract = () => {
        changeNumberForPreviousResult()
        lastOperation.current = Operators.substract
    }

    const add = () => {
        changeNumberForPreviousResult()
        lastOperation.current = Operators.add
    }

    const calculate = () => {
        const num1 = Number(result)
        const num2 = Number(previousResult)

        switch (lastOperation.current) {
            case Operators.add:
                setResult(`${num1 + num2}`)
                break;
            case Operators.substract:
                setResult(`${num2 - num1}`)
                break;
            case Operators.multiply:
                setResult(`${num1 * num2}`)
                break;
            case Operators.divide:
                setResult(`${num2 / num1}`)
                break;
        }

        setPreviousResult('0')
    }

    return {
        add,
        buildNumber,
        calculate,
        clear,
        deleteLastNumber,
        divide,
        multiply,
        positiveNegative,
        previousResult,
        result,
        substract,
    }
}
