# Go away Solution

**Author:** GokuUltra
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/4385667/](https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/4385667/)

---


# Code
```
func monkeyMove(n int) int {
    mod := 1000000007
    res := fastPow(2, n, mod) - 2

    if res < 0 {
        return res + mod
    } else {
        return res
    }
}

func fastPow(k int, n int, mod int) int {
    if n == 0 {
        return 1
    }

    if n == 1 {
        return k
    }

    halfPow := fastPow(k, n/2, mod) % mod

    if n % 2 == 1 {
        return (halfPow * halfPow * k) % mod
    } else {
        return (halfPow * halfPow) % mod
    }
}
```