# [Java/C++/Python] Sort

**Author:** lee215
**Votes:** 41
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/4985548/](https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/4985548/)

---

# **Median**
In this problem, median is A[n / 2] after sort.
Leetcode didn't give a clear definition.
<br>
# **Explanation**
Sort the input `A`,
the first half should all smaller than `k`,
the second half should all bigger than `k`.
<br>

# **Complexity**
Time `O(sort)`
Space `O(sort)`
<br>

**Java**
```java
    public long minOperationsToMakeMedianK(int[] A, int k) {
        int n = A.length;
        long res = 0;
        Arrays.sort(A);
        for (int i = 0; i <= n / 2; ++i)
            res += Math.max(0, A[i] - k);
        for (int i = n / 2; i < n; ++i)
            res += Math.max(0, k - A[i]);
        return res;
    }
```

**C++**
```cpp
    long long minOperationsToMakeMedianK(vector<int>& A, int k) {
        long long res = 0, n = A.size();
        sort(A.begin(), A.end());
        for (int i = 0; i <= A.size() / 2; ++i)
            res += max(0, A[i] - k);
        for (int i = n / 2; i < n; ++i)
            res += max(0, k - A[i]);
        return res;
    }
```

**Python**
```py
    def minOperationsToMakeMedianK(self, A: List[int], k: int) -> int:
        n = len(A)
        A.sort()
        return sum(max(A[i] - k, 0) for i in range(n // 2 + 1)) + \\
               sum(max(k - A[i], 0) for i in range(n // 2, n))
```
