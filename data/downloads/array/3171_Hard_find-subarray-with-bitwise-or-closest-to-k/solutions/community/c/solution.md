# [Java/C++/Python] Bits

**Author:** lee215
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/5256239/](https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/5256239/)

---

# **Preword**
The original problem is
"3171. Find Subarray With Bitwise AND Closest to K"

Now it's changed to
"3171. Find Subarray With Bitwise OR Closest to K"
<br>

# **Intuition**
The operation `a | x` will make `a` bigger by adding some bits of `a`,
and `a` will have atmost 30 bits length and 29 bits.
<br>

# **Explanation**
Iterate `A[i]`,
and make `A[j] = A[j] | A[j + 1] | ... | A[i]`.
In other words,
we maintain visited `A[j]` as a suffix OR array ending at `A[i]`.

If `(A[j] | A[i]) == A[j]`,
we stop backward itearation,
since `| A[i]` won't add any more bits.

Each `A[j]` will be added bits at most 29 times.
<br>

# **Complexity**
Time `O(30n)`
Space `O(1)`
<br>

**Java**
```java
    public int minimumDifference(int[] A, int k) {
        int res = Integer.MAX_VALUE;
        for (int i = 0; i < A.length; i++) {
            res = Math.min(res, Math.abs(A[i] - k));
            for (int j = i - 1; j >= 0 && (A[j] | A[i]) != A[j]; j--) {
                A[j] |= A[i];
                res = Math.min(res, Math.abs(A[j] - k));
            }
        }
        return res;
    }
```

**C++**
```cpp
    int minimumDifference(vector<int>& A, int k) {
        int res = INT_MAX, n = A.size();
        for (int i = 0; i < n; i++) {
            res = min(res, abs(A[i] - k));
            for (int j = i - 1; j >= 0 && (A[j] | A[i]) != A[j]; --j) {
                res = min(res, abs((A[j] |= A[i]) - k));
            }
        }
        return res;
    }
```

**Python**
```py
    def minimumDifference(self, A: List[int], k: int) -> int:
        res = inf
        for i, x in enumerate(A):
            res = min(res, abs(x - k))
            j = i - 1
            while j >= 0 and A[j] | x != A[j]:
                A[j] |= x
                res = min(res, abs(A[j] - k))
                j -= 1
        return res
```
<br>

# Solution 2: Using set
Same to solution 1, but use a set to save the seen `A[i]`

Time `O(30n)`
Space `O(30)`

```py
    def minimumDifference(self, A: List[int], k: int) -> int:
        res = inf
        cur = set()
        for a in A:
            cur = {v & a for v in cur} | {a}
            res = min(res, min(abs(v - k) for v in cur))
        return res
```
