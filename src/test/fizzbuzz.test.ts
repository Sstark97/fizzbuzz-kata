import { fizzbuzz } from "../core/fizzbuzz";

describe('Fizzbuzz Test', () => {
    it("check that number 3 returns fizz", () => {
        const fizzbuzzResult = fizzbuzz()
        const fizz = fizzbuzzResult.find((num, pos) => num === "fizz" && (pos + 1) % 3 === 0)

        expect(fizz).toBe("fizz")
    })

    it("check that number 5 returns buzz", () => {
        const fizzbuzzResult = fizzbuzz()
        const buzz = fizzbuzzResult.find((num, pos) => num === "buzz" && (pos + 1) % 5 === 0)

        expect(buzz).toBe("buzz")
    })

    it("check that fizzbuzz have a length of 100", () => {
        const fizzbuzzResult = fizzbuzz()

        expect(fizzbuzzResult.length).toBe(100)
    })

    it("check that fizzbuzz of multiples of 3 and 5 is fizzbuzz", () => {
        const fizzbuzzResult = fizzbuzz()
        const fizzbuzzRes = fizzbuzzResult.find((num, pos) => num === "fizzbuzz" && (pos + 1) % 15 === 0)

        expect(fizzbuzzRes).toBe("fizzbuzz")
    })
});