# Multinomial, mod inverse with explanations, 14ms, clean code

**Author:** dkochetov
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-the-number-of-infection-sequences/solutions/4364911/](https://leetcode.com/problems/count-the-number-of-infection-sequences/solutions/4364911/)

---

# Approach

We need `multinomial coefficient` and `modular inverse` here to solve the task and avoid overflow.


> The multinomial coefficient is used to tell us the number of ways (N) in which n elements can be split into k disjoint subsets when the order of the elements in them does not matter.

Regarding modular inverse, I spent a few hours to understand why we need it, so let me summarise it for you. it's required for correctly finding the remainder of our result when we have large divisors in our calculations.  We know that 
- `(a * b) % MOD` \u2261 `((a % MOD) * (b % MOD)) % MOD`
- `(a + b) % MOD` \u2261 `((a % MOD) + (b % MOD)) % MOD`

so in the numerator we just use these properties.

**BUT!** It will not work when we divide by some number!
- `(a / b) % MOD` **!\u2261** `((a % MOD) / (b % MOD)) % MOD`

In this case we must use `modular inverse` function:
- `(a / b) % MOD` \u2261 `((a % MOD) * modInverse(b, MOD)) % MOD`

This function uses `Extended Euclidean algorithm` (GCD), you can read an article about it.

I tried to write these decently optimised helpers for my Gophers bros, hope it helps you!

---
# Note

The `Big` package has a function for calculating `modular inverse`, but the runtime grows to 40ms, so my implementation is faster apparently.
```golang []
func modInverse(a int) int {
    bigInt := big.Int{}
    return int(bigInt.ModInverse(big.NewInt(int64(a)), big.NewInt(int64(MOD))).Int64())
}
```

---
# Submission

![Screenshot 2023-12-05 at 11.54.42.png](./images/0.png)


# Code
```golang []
const MOD = int(1e9+7)

// (k1 + k2 + k3)! / (k1! * k2! * k3!)
func multinomial(k []int) int {
    n := 0
    denominator := 1
    for i := range k {
        n += k[i]
        n %= MOD
        denominator *= factorial(k[i])
        denominator %= MOD
    }
    return factorial(n) * modInverse(denominator) % MOD
}

var factorialMemo = []int{1}
func factorial(num int) int {
    for i := len(factorialMemo); i <= num; i++ {
        factorialMemo = append(factorialMemo, (factorialMemo[i-1] * i) % MOD)
    }
    return factorialMemo[num]
}

func modInverse(a int) int {
    d, modInv, _ := gcd(a, MOD)
    if d != 1 {
        panic(fmt.Sprintf("gcd(%d, %d)=%d, must be 1", a, MOD, d))
    }
    return (modInv + MOD) % MOD
}

func gcd(a int, b int) (int, int, int) {
    if a == 0 {
        return b, 0, 1
    }
    d, x, y := gcd(b % a, a)
    return d, y - (b / a) * x, x
}

func pow(a int, p int) int {
    res := 1
    for p > 0 {
        if p % 2 == 1 {
            res *= a
            res %= MOD
        }
        a *= a
        a %= MOD
        p /= 2
    }
    return res
}

func numberOfSequence(n int, sick []int) int {
    options := 1
    lenghts := []int{sick[0], n - sick[len(sick)-1] - 1} // non-infected leftmost and rightmost lengths
    for i := 1; i < len(sick); i++ { // all lenghts of non-infected between infected
        l := sick[i] - sick[i-1] - 1
        if l > 0 {
            lenghts = append(lenghts, l)

            // neither leftmost nor rightmost
            // can be infected from both sides with 2^(len-1) options
            options *= pow(2, l-1)
            options %= MOD
        }
    }

    return options * multinomial(lenghts) % MOD
}

```