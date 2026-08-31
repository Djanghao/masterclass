# [Java/C++/Python] DP, Stirling

**Author:** lee215
**Votes:** 20
**Link:** [https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/solutions/5903810/](https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/solutions/5903810/)

---

# **Explanation**
Enumerate the number of events `a`:

`perm(x, a)`
From `x` events, pick `a` events.

`s(n, a)`
Assign `n` performers to `a` events,
each event at least one performer.
Stirling number.

`pow(y, a)`
Each event can have score from `1` to `y`

There are `perm(x, a) * s(n, a) * pow(y, a)` for `a` events.
<br>

# **Complexity**
`static`
Time `O(n * n)`
Space `O(n * n)`

`numberOfWays(int n, int x, int y)`
Time `O(min(n, x))`
Space `O(1)`
<br>

# **Update**
`perm(x, a) * s(n, a) == comb(x, a) * f(n, a)`
where 
`f(n, k) = k * (s(n - 1, k) + s(n - 1, k - 1))`
I updated the equation to use pure Stirling number.
The main ideas are the same.

**Java**
```java
class Solution {
    private static final long mod = 1000000007;
    private static long[][] s = new long[1001][1001];
    static {
        s[0][0] = 1;
        for (int i = 1; i <= 1000; i++)
            for (int j = 1; j <= i; j++)
                s[i][j] = (s[i - 1][j - 1] + s[i - 1][j] * j) % mod;
    }

    public int numberOfWays(int n, int x, int y) {
        long res = 0, perm = 1, pow = 1;
        for (int i = 1; i <= Math.min(n, x); i++) {
            perm = perm * (x - i + 1) % mod;
            pow = pow * y % mod;
            res = (res + perm * s[n][i] % mod * pow) % mod;
        }
        return (int) res;
    }
}

```

**C++**
```cpp
long long s[1001][1001], mod = 1e9 + 7;
auto init = [] {
    s[0][0] = 1;
    for (int i = 1; i <= 1000; i++)
        for (int j = 1; j <= i; j++)
            s[i][j] = (s[i - 1][j - 1] + s[i - 1][j] * j) % mod;
    return 0;
}();

class Solution {
public:
    int numberOfWays(int n, int x, int y) {
        long long res = 0, perm = 1, pow = 1;
        for (int i = 1; i <= min(n, x); i++) {
            perm = perm * (x - i + 1) % mod;
            pow = pow * y % mod;
            res = (res + perm * s[n][i] % mod * pow) % mod;
        }
        return res;
    }
};
```

**Python**
```py
mod = 10 ** 9 + 7
@cache
def s(n, k):
    if n < k: return 0
    if k == 1: return 1
    return (k * s(n - 1, k) + s(n - 1, k - 1)) % mod

class Solution:
    def numberOfWays(self, n: int, x: int, y: int) -> int:
        res = 0
        for a in range(1, min(n, x) + 1):
            res += perm(x, a) * s(n, a) * pow(y, a, mod)
        return res % mod
```
