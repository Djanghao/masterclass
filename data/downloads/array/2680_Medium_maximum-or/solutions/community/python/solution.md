# [Java/C++/Python] Easy One Pass

**Author:** lee215
**Votes:** 34
**Link:** [https://leetcode.com/problems/maximum-or/solutions/3520589/](https://leetcode.com/problems/maximum-or/solutions/3520589/)

---

# **Intuition**
The best plan is to double the same number `k` times
this will shift the leftmost bit to left `k` bits.
<br>

# **Explanation**
`right[i] = A[i + 1] * A[i + 2] * ... * A[n - 1]`
`left[i] = A[0] * A[1] * ... * A[i - 1]`

So the result for doubling `A[i]` is
`left[i] | A[i] << k | right[i]`.

One pass `A` and return the result.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public long maximumOr(int[] A, int k) {
        int n = A.length, right[] = new int[n], left = 0;
        long res = 0;
        for (int i = n - 2; i >= 0; --i) {
            right[i] = right[i + 1] | A[i + 1];
        }
        for (int i = 0; i < n; i++) {
            res = Math.max(res, left | (long)A[i] << k | right[i]);
            left |= A[i];
        }
        return res;
    }
```

**C++**
```cpp
    long long maximumOr(vector<int> &A, int k) {
        int n = A.size(), left = 0;
        vector<int> right(n);
        long res = 0;
        for (int i = n - 2; i >= 0; --i) {
            right[i] = right[i + 1] | A[i + 1];
        }
        for (int i = 0; i < n; i++) {
            res = max(res, left | (long)A[i] << k | right[i]);
            left |= A[i];
        }
        return res;
    }
```

**Python**
```py
    def maximumOr(self, A: List[int], k: int) -> int:
        res, left, n = 0, 0, len(A)
        right = [0] * n
        for i in range(n - 2, -1, -1):
            right[i] = right[i + 1] | A[i + 1]
        for i in range(n):
            res = max(res, left | A[i] << k | right[i])
            left |= A[i]
        return res
```
