# [Java/C++/Python] Combinations, O(1) Space

**Author:** lee215
**Votes:** 41
**Link:** [https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5177181/](https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5177181/)

---

# **Intuition**
For each `j = jump`,
we can reach `k` that `(1 << j) - j - 1 <= k <= 1 << j`
<br>

# **Explanation**
We have `a = jump + 1` chance to go down,
and we need to go down `b = (1 << jump) - k)` times.
The ways here is `combination(a, b)`

Iterate `jump` from `0` to `40`,
and accumulate the combinations.

<br>

# **Complexity**
Time `O(32 * 32)`
Space `O(1)`
<br>


**Java**
```java
    private int comb(int n, int k) {
        if (k < 0 || k > n) return 0;
        long res = 1;
        for (int i = 0; i < k; ++i)
            res = res * (n - i) / (i + 1);
        return (int)res;
    }

    public int waysToReachStair(int k) {
        int res = 0;
        for (int j = 0; j < 31; j++)
            res += comb(j + 1, (1 << j) - k);
        return res;
    }
```

**C++**
```cpp
    int comb(int n, int k) {
        if (k < 0 || k > n) return 0;
        long res = 1;
        for (int i = 0; i < k; ++i)
            res = res * (n - i) / (i + 1);
        return res;
    }

    int waysToReachStair(int k) {
        int res = 0;
        for (int j = 0; j < 31; j++)
            res += comb(j + 1, (1 << j) - k);
        return res;
    }
```

**Python**
```py
    def waysToReachStair(self, k: int) -> int:
        return sum(comb(j + 1, (1 << j) - k) for j in range(40) if 1 << j >= k)
```
