# [Java/C++/Python] Math

**Author:** lee215
**Votes:** 35
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4143950/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4143950/)

---

# **Brute Force**
**C++**
```cpp
    int differenceOfSums(int n, int m) {
        int res = 0;
        for (int i = 1; i <= n; ++i) {
            if (i % m == 0) {
                res -= i;
            } else {
                res += i;
            }
        }
        return res;
    }
```
<br>

# **Math**
```
m + 2m + 3m + .. + km
= (1 + 2 + 3 + .. + k) * m
= (1 + k) * k / 2 * m
```

```
num1 - num2
= (1 + 2 + .. n) - (m + 2m + .. + km) * 2
= (1 + n) * n / 2 - (1 + k) * k * m
```

where `k = n / m` (integer division)
<br>

# **Complexity**
Time `O(n1)`
Space `O(n)`
<br>

**Java**
```java
    public int differenceOfSums(int n, int m) {
        return (1 + n) * n / 2 - (1 + n / m) * (n / m) * m;
    }
```

**C++**
```cpp
    int differenceOfSums(int n, int m) {
        return (1 + n) * n / 2 - (1 + n / m) * (n / m) * m;
    }
```

**Python**
```py
    def differenceOfSums(self, n: int, m: int) -> int:
        return (1 + n) * n // 2 - (1 + n // m) * (n // m) * m
```
