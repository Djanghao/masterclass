# [Java/C++/Python] Math Solution O(klogk) 🔥

**Author:** lee215
**Votes:** 96
**Link:** [https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/2527381/](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/2527381/)

---

# **Explanation**
Two sufficient and necessary conditions from `a` to `b` with `k` steps:
1. `abs(a - b) <= k`
2. `(a - b - k) % 2 == 0`

Otherwice no ways, directly return 0.

Now two eqations
`left + right = k`
`right - left = b - a`

So we can have `right = (b - a + k) / 2`.
The combinations is to pick `right` steps from `k` steps to go right.
return result `combination(k, right)`
<br>

# **Complexity**
Time `O(klogk)`
Space `O(1)`
<br>

**Java**
```java
    int p = 1000000007;
    public int numberOfWays(int a, int b, int k) {
        if ((a - b - k) % 2 != 0) return 0;
        if (Math.abs(a - b) > k) return 0;
        long res = 1L;
        for (int i = 0; i < (b - a + k) / 2; ++i) {
            res = res * (k - i) % p;
            res = res * inv(i + 1) % p;
        }
        return (int)res;
    }

    private long inv(long a) {
        if (a == 1) return 1;
        return (p - p / a) * inv(p % a) % p;
    }
```
**C++**
```cpp
    int p = 1e9 + 7;
    int numberOfWays(int a, int b, int k) {
        if ((a - b - k) % 2) return 0;
        if (abs(a - b) > k) return 0;
        long long res = 1L;
        for (int i = 0; i < (b - a + k) / 2; ++i) {
            res = res * (k - i) % p;
            res = res * inv(i + 1) % p;
        }
        return res;
    }

    long inv(long a) {
        if (a == 1) return 1;
        return (p - p / a) * inv(p % a) % p;
    }
```

**Python**
```py
    def numberOfWays(self, a, b, k):
        if (a - b - k) % 2: return 0
        return comb(k, (b - a + k) // 2) % (10 ** 9 + 7)
```
