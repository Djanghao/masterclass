# [Java/Python 3] Iterative O(logn) code, similar to LC50 Pow(x, n) w/ brief explanation and analysis.

**Author:** rock
**Votes:** 26
**Link:** [https://leetcode.com/problems/count-good-numbers/solutions/1314363/](https://leetcode.com/problems/count-good-numbers/solutions/1314363/)

---

1. For each even index, there are 5 options: `0`, `2`, `4`, `6`, `8`;
2. For each odd index, there are 4 options: `2`, `3`, `5`, `7`;
3. If `n` is even, the solution is `(4 * 5) ^ (n / 2)`; if odd, `(4 * 5) ^ (n / 2) * 5`.

**Method 1: Bruteforce**

The input range is as large as `10 ^ 15`, hence the following bruteforec codes will get `TLE` (Time Limit Exceeded) without any surprise.

```java
    private static final int MOD = 1_000_000_007;
    public int countGoodNumbers(long n) {
        long good = n % 2 == 0 ? 1 : 5;
        for (long i = 0, x = 4 * 5; i < n / 2; ++i) {
            good = good * x % MOD;   
        }
        return (int)good;
    }
```
```python
    def countGoodNumbers(self, n: int) -> int:
        good, x = 5 ** (n % 2), 4 * 5
        for _ in range(n // 2):
            good = good * x % (10 ** 9 + 7)
        return good
```

**Analysis:**

Time: `O(n)`, space: `O(1)`.

----

**Method 2: fast power**

Our main object is to compute `x ^ (n // 2)`. To deal with the large input of `10 ^ 15`, we can use fast power: 

Denote `n // 2` as `i`. 
1. If `i` is even, increase `x` to `x ^ 2` and divide `i` by `2`;
2. If `i` is odd, multiply `good` by `x` and deduct `i` by `1`; now `i` is even, go to procedure `1`.

Repeat the above till `i` decrease to `0`, and `good` is our solution. Please refer to the following recursive codes:

```java
    private static final int MOD = 1_000_000_007;
    public int countGoodNumbers(long n) {
        return (int)(countGood(n / 2, 4 * 5) * (n % 2 == 0 ? 1 : 5) % MOD);
    }
    private long countGood(long  power, long x) {
        if (power == 0) {
            return 1;
        }else if (power % 2 == 0) {
            return countGood(power / 2, x * x % MOD);
        } 
        return x * countGood(power - 1, x) % MOD;
    }
```
```python
    def countGoodNumbers(self, n: int) -> int:
        
        def countGood(power: int, x: int) -> int:
            if power == 0:
                return 1  
            elif power % 2 == 0:
                return countGood(power // 2, x * x % MOD)
            return x * countGood(power - 1, x) % MOD

        MOD = 10 ** 9 + 7
        return 5 ** (n % 2) * countGood(n // 2, 4 * 5) % MOD
```
**Analysis:**

Time & space: `O(logn)`.

We can further change the above recursive versions into iterative ones:
```java
    private static final int MOD = 1_000_000_007;
    public int countGoodNumbers(long n) {
        long good = n % 2 == 0 ? 1 : 5;
        for (long i = n / 2, x = 4 * 5; i > 0; i /= 2, x = x * x % MOD) {
            if (i % 2 != 0) {
                good = good * x % MOD;
            }
        }
        return (int)good;
    }
```
```python
    def countGoodNumbers(self, n: int) -> int:
        MOD = 10 ** 9 + 7
        good, x, i = 5 ** (n % 2), 4 * 5, n // 2
        while i > 0:
            if i % 2 == 1:
                good = good * x % MOD
            x = x * x % MOD
            i //= 2
        return good
```

**Analysis:**

Time: `O(logn)`, space: `O(1)`.