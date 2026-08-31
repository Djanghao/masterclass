# [Java/C++/Python] Comparison of Consecutive Elements

**Author:** lee215
**Votes:** 237
**Link:** [https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/754674/](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/754674/)

---

# **Explanation**
Whenever  `A[i] > A[i - 1]`
we need at lease `A[i] - A[i - 1]` operations to make this difference.

We accumulate the total number of the operations,
this result is a lower bound and it's feasible.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int minNumberOperations(int[] A) {
        int res = A[0];
        for (int i = 1; i < A.length; ++i)
            res += Math.max(A[i] - A[i - 1], 0);
        return res;
    }
```
**C++**
```cpp
    int minNumberOperations(vector<int>& A) {
        int res = A[0];
        for (int i = 1; i < A.size(); ++i)
            res += max(A[i] - A[i - 1], 0);
        return res;
    }
```
**Python**
```py
    def minNumberOperations(self, A):
        return sum(max(b - a, 0) for b, a in zip(A, [0] + A))
```
