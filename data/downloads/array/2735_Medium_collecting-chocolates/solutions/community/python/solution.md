# [Java/C++/Python] Rotate

**Author:** lee215
**Votes:** 67
**Link:** [https://leetcode.com/problems/collecting-chocolates/solutions/3623841/](https://leetcode.com/problems/collecting-chocolates/solutions/3623841/)

---

# **Preword**
I feel,
the description and the explanation in example 1,
are totaly **opposite**...
though it doesn't change the result..
<br>

# **Intuition**
If we do rotate operation `k` times,
we can use the `min(A[i-k], .. , A[i - 1], A[i])` as the cost for type `i`.
<br>

# **Explanation**
Initilize result array `res`.
`res[k]` means the result for `k` times operation,
and we initilize `res[k] = k * x` for rotation cost.

To collect type `i`
we calculate `cur = min(A[i-k], .. , A[i - 1], A[i])`,
and increment `res[k] += cur`,
so we calculate the minimum cost to get type `i` with `k` operation.

Finally we return the `min(res)` as final result.
<br>

# **Complexity**
Time `O(n^2)`, can be `O(n)` using stack, check this [solution](https://leetcode.com/problems/collecting-chocolates/discuss/3651340/JavaC%2B%2BPython-Stack-and-Calculous-O(n))
Space `O(n)`
<br>

**Java**
```java
    public long minCost(int[] A, int x) {
        int n = A.length;
        long[] res = new long[n];
        for (int i = 0; i < n; i++) {
            res[i] += 1L * i * x;
            int cur = A[i];
            for (int k = 0; k < n; k++) {
                cur = Math.min(cur, A[(i - k + n) % n]);
                res[k] += cur;
            }
        }

        long min_res = Long.MAX_VALUE;
        for (long element : res) {
            min_res = Math.min(min_res, element);
        }

        return min_res;
    }
```

**C++**
```cpp
    long long minCost(vector<int>& A, int x) {
        int n = A.size();
        vector<long long> res(n);
        for (int i = 0; i < n; i++) {
            res[i] += 1L * i * x;
            int cur = A[i];
            for (int k = 0; k < n; k++) {
                cur = min(cur, A[(i - k + n) % n]);
                res[k] += cur;
            }
        }
        return *std::min_element(res.begin(), res.end());
    }
```

**Python**
```py
    def minCost(self, A: List[int], x: int) -> int:
        n = len(A)
        res = [x * k for k in range(n)]
        for i in range(n):
            cur = A[i]
            for k in range(n):
                cur = min(cur, A[i - k])
                res[k] += cur
        return min(res)
```
