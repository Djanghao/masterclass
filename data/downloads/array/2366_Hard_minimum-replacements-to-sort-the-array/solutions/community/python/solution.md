# [Java/C++/Python] One Reverse Pass

**Author:** lee215
**Votes:** 80
**Link:** [https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/2388265/](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/2388265/)

---

# **Explanation**
Reversely iterate the array `A`.
`x` is the current upper bound.
Initiliza `x` with a big enough value.


For element `A[i]`,
If `A[i] % x == 0`,
then we can divide `A[i]` all into `x` with count `k = A[i] / x`.
with `k - 1` operations,
the upper bound is still `x`
(`//` means integer division)

If `A[i] % x > 0`,
then we can divide `A[i]` all into `x` with count `k = A[i] / x + 1`.
with `k - 1` operations,
the upper bound is `A[i] / k`.
(`//` means integer division)
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long minimumReplacement(int[] A) {
        long x = 1000000000, res = 0, k;
        for (int i = A.length - 1; i >= 0; --i) {
            k = (A[i] + x - 1) / x;
            x = A[i] / k;
            res += k - 1;
        }
        return res;
    }
```

**C++**
```cpp
    long long minimumReplacement(vector<int>& A) {
        long n = A.size(), x = 1e9, res = 0, k;
        for (int i = n - 1; i >= 0; --i) {
            k = (A[i] + x - 1) / x;
            x = A[i] / k;
            res += k - 1;
        }
        return res;
    }
```

**Python**
```py
    def minimumReplacement(self, A):
        x = A[-1]
        res = 0
        for a in reversed(A):
            k = (a + x - 1) // x
            x = a // k
            res += k - 1
        return res
```
