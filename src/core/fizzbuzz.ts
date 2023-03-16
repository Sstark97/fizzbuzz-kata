export const fizzbuzz = () => {
    const arr = [1, 2, 3];
    const fizzBuzzResult: (string | number)[] = arr.map(num => {
        if(num % 3 === 0) {
            return "fizz"
        }
        return num
    })

    return fizzBuzzResult
};