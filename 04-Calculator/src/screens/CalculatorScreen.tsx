import React, { } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { CalculatorButton } from '../components/CalculatorButton'
import { useCalculator } from '../hooks/useCalculator'

export const CalculatorScreen = () => {

    const calculator = useCalculator()

    return (
        <View style={styles.calculatorContainer}>
            {
                (calculator.previousResult !== '0') && (
                    <Text style={styles.previousResult}>{calculator.previousResult}</Text>
                )
            }

            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {calculator.result}
            </Text>

            {/* Fila de botones */}
            <View style={styles.row}>
                <CalculatorButton text="C" textColor='black' color='#9B9B9B' action={calculator.clear} />
                <CalculatorButton text="+/-" textColor='black' color='#9B9B9B' action={calculator.positiveNegative} />
                <CalculatorButton text="del" textColor='black' color='#9B9B9B' action={calculator.deleteLastNumber} />
                <CalculatorButton text="/" color='#FF9427' action={calculator.divide} />
            </View>

            <View style={styles.row}>
                <CalculatorButton text="7" action={calculator.buildNumber} />
                <CalculatorButton text="8" action={calculator.buildNumber} />
                <CalculatorButton text="9" action={calculator.buildNumber} />
                <CalculatorButton text="x" color='#FF9427' action={calculator.multiply} />
            </View>

            <View style={styles.row}>
                <CalculatorButton text="4" action={calculator.buildNumber} />
                <CalculatorButton text="5" action={calculator.buildNumber} />
                <CalculatorButton text="6" action={calculator.buildNumber} />
                <CalculatorButton text="-" color='#FF9427' action={calculator.substract} />
            </View>

            <View style={styles.row}>
                <CalculatorButton text="1" action={calculator.buildNumber} />
                <CalculatorButton text="2" action={calculator.buildNumber} />
                <CalculatorButton text="3" action={calculator.buildNumber} />
                <CalculatorButton text="+" color='#FF9427' action={calculator.add} />
            </View>


            <View style={styles.row}>
                <CalculatorButton text="0" action={calculator.buildNumber} />
                <CalculatorButton text="." action={calculator.buildNumber} />
                <CalculatorButton text="=" color='#FF9427' action={calculator.calculate} />
            </View>
        </View>
    )
}
