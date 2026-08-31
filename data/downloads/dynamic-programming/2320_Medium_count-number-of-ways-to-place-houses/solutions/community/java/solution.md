# [Java/C++/Python] Fibo Sequence, O(logn)

**Author:** lee215
**Votes:** 34
**Link:** [https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/2198269/](https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/2198269/)

---

# **Explanation**
Inspired by @lordofmountain
One side has no effect to the other.
The number of way on one side is fibo sequence.
return `fibo * fibo` in the end.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int countHousePlacements(int n) {
        int a = 1, b = 1, c = 2, mod = (int)1e9 + 7;
        for (int i = 0; i < n; ++i) {
            c = (a + b) % mod;
            a = b;
            b = c;
        }
        return (int)(1L * b * b % mod);
    }
```

**C++**
```cpp
    int countHousePlacements(int n) {
        int a = 1, b = 1, c = 2, mod = 1e9 + 7;
        for (int i = 0; i < n; ++i) {
            c = (a + b) % mod;
            a = b;
            b = c;
        }
        return 1L * b * b % mod;
    }
```

**Python**
```py
    def countHousePlacements(self, n):
        a, b, mod = 1, 1, 10**9 + 7
        for i in range(n):
            a, b = b, (a + b) % mod
        return b * b % mod
```
<br>

# **Solution 2: Fast Pow**
Time `O(logn)`
Space `O(1)`

**Python**
```py
    def fib(self, n: int) -> int:
        a, b, c, d, mod = 1, 1, 0, 1, 10 ** 9 + 7
        while n:
            if n & 1:
                a, b = a * c + b * d, a * d + b * c + b * d
                n -= 1
            else:
                c, d = c * c + d * d, 2 * c * d + d * d
                n >>= 1
            a, b, c, d = a % mod, b % mod, c % mod, d % mod
        return a

    def countHousePlacements(self, n):
        return self.fib(n + 1) ** 2 % (10 ** 9 + 7)
```