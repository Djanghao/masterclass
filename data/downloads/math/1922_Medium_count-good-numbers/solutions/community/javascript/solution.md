# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-good-numbers/solutions/4836032/](https://leetcode.com/problems/count-good-numbers/solutions/4836032/)

---

# Code
```
var countGoodNumbers = function (n) {
    n = BigInt(n)
    let mod = BigInt(1_000_000_007)
    let even = (n + 1n) / 2n
    let odd = n / 2n
    let first = pow(5n, even) % mod
    let second = pow(4n, odd) % mod

    return Number((first * second) % mod)


    function pow(x, n) {
        if (n === 0n)
            return 1n;
        let temp = pow(BigInt(x), n / 2n);
        if (n % 2n === 0n)
            return (temp * temp) % mod
        else
            return (x * temp * temp) % mod
    }
};
```