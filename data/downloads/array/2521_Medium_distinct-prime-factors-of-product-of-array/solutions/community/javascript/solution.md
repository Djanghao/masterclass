# [JavaScript] Neat

**Author:** mxn42
**Votes:** 2
**Link:** [https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/2980010/](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/2980010/)

---

```js
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
const distinctPrimeFactors = (nums) => {
    const primeFactors = new Set()
    for (let x of nums) {
        for (const p of primes)
            if (x % p === 0) {
                primeFactors.add(p)
                while (x % p === 0)
                    x /= p
                if (x === 1)
                    break
            }
        if (x !== 1)
            primeFactors.add(x)
    }
    return primeFactors.size
}
```
Runtime 81 ms, Beats 100%
