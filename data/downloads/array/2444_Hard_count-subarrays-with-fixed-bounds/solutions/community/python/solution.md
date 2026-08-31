# [Java/C++/Python] Sliding Window with Explanation 🔥

**Author:** lee215
**Votes:** 692
**Link:** [https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/2708099/](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/2708099/)

---

# **Intuition**
Count the number of subarrays,
using sliding window(three pointers).
<br>

# **Explanation**
We maintain a maximum sliding window
with alll elements in range `[minK, maxK]`,
For all `A[i]` as rightmost element of the subarray,
we find the three indices `j`, where:
`jbad` is index of last seen `A[jbad] < minK || A[jbad] > maxK`
`jmin` is index of last seen `A[jmin] = mink`
`jmax` is index of last seen `A[jmax] = maxk`

Itearte the `A[i]`,
if `A[i] < minK || A[i] > maxK`, update `jbad = i`.
if `A[i] == minK`, update `jmin = i`.
if `A[i] == maxK`, update `jmax = i`.

In the end of each iteration,
the subarray ends at `A[i]`
the starting element of the subarray,
can be choosen in interval `[jbad + 1, min(jmin, jmax)]`
There are `min(jmin, jmax) - jbad` choices,
so we update `res += max(0, min(jmin, jmax) - jbad)`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long countSubarrays(int[] A, int minK, int maxK) {
        long res = 0, jbad = -1, jmin = -1, jmax = -1, n = A.length;
        for (int i = 0; i < n; ++i) {
            if (A[i] < minK || A[i] > maxK) jbad = i;
            if (A[i] == minK) jmin = i;
            if (A[i] == maxK) jmax = i;
            res += Math.max(0L, Math.min(jmin, jmax) - jbad);
        }
        return res;
    }
```

**C++**
```cpp
    long long countSubarrays(vector<int>& A, int minK, int maxK) {
        long res = 0, jbad = -1, jmin = -1, jmax = -1, n = A.size();
        for (int i = 0; i < n; ++i) {
            if (A[i] < minK || A[i] > maxK) jbad = i;
            if (A[i] == minK) jmin = i;
            if (A[i] == maxK) jmax = i;
            res += max(0L, min(jmin, jmax) - jbad);
        }
        return res;
    }
```

**Python**
```py
    def countSubarrays(self, A: List[int], minK: int, maxK: int) -> int:
        res = 0
        jmin = jmax = jbad = -1
        for i,a in enumerate(A):
            if not minK <= a <= maxK: jbad = i
            if a == minK: jmin = i
            if a == maxK: jmax = i
            res += max(0, min(jmin, jmax) - jbad)
        return res
```
