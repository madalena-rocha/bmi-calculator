export function notANumber(value) {
    return isNaN(value) || value == "" // isNaN considera "" como um número
}

export function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}