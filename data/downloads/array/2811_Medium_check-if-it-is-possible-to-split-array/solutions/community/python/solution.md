# [Java/C++/Python] Easy and Concise

**Author:** lee215
**Votes:** 67
**Link:** [https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3869925/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3869925/)

---

# **Intuition**
If `n == 1`, done.
If `n == 2`, split once, done.
Otherwise we must have a middle status,
that one array has length `2` and `A[i] + A[i + 1] >= m`.
<br>

# **Explanation**
If `n > 2`
there is at least one pair satisfies `A[i] + A[i + 1] >= m`.

This is a necessry and sufficient condition to split array.

So we return if `n <= 2` or any `A[i] + A[i + 1] >= m`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public boolean canSplitArray(List<Integer> A, int m) {
        for (int i = 0; i < A.size() - 1; ++i)
            if (A.get(i) + A.get(i + 1) >= m)
                return true;
        return A.size() < 3;
    }
```

**C++**
```cpp
    bool canSplitArray(vector<int>& A, int m) {
        for (int i = 0; i < A.size() - 1; ++i)
            if (A[i] + A[i + 1] >= m)
                return true;
        return A.size() < 3;
    }
```

**Python**
```py
	def canSplitArray(self, A: List[int], m: int) -> bool:
        return len(A) <= 2 or any(A[i] + A[i + 1] >= m for i in range(len(A) - 1))
```
