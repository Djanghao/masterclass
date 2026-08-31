# [Java/C++/Python] One Pass, O(1) Space

**Author:** lee215
**Votes:** 39
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4169718/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4169718/)

---

# **Intuition**
The brute force solution is two `for` loop to check all pairs.

If index difference `d = 1`,
it will be more straight forward,
we can iterate the array `A`,
and keep minimum and maximum in the prefix of `A`.
<br>

# **Explanation**
For `d > 1`, we can do the same thing.
`mini` is the index of minimum element in the prefix of `A`.
`maxi` is the index of maximum element in the prefix of `A`.

Iterate `A[i]` from `A[d]` to `A[n - 1]`,
We compare `A[i - d]` with `A[mini]` and `A[maxi]`,
and update `mini` and `maxi`.

Then check if `A[i]` has enough value difference from `A[mini]` and `A[maxi]`.
If so, we return the pair.

Finally, if we find nothing, we return `[-1, -1]`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int[] findIndices(int[] A, int d, int v) {
        int mini = 0, maxi = 0, n = A.length;
        for (int i = d; i < n; i++) {
            if (A[i - d] < A[mini]) mini = i - d;
            if (A[i - d] > A[maxi]) maxi = i - d;
            if (A[i] - A[mini] >= v) return new int[] {mini, i};
            if (A[maxi] - A[i] >= v) return new int[] {maxi, i};
        }
        return new int[] { -1, -1};
    }
```

**C++**
```cpp
    vector<int> findIndices(vector<int>& A, int d, int v) {
        int mini = 0, maxi = 0, n = A.size();
        for (int i = d; i < n; i++) {
            if (A[i - d] < A[mini]) mini = i - d;
            if (A[i - d] > A[maxi]) maxi = i - d;
            if (A[i] - A[mini] >= v) return {mini, i};
            if (A[maxi] - A[i] >= v) return {maxi, i};
        }
        return { -1, -1};
    }
```

**Python**
```py
    def findIndices(self, A: List[int], d: int, valueDifference: int) -> List[int]:
        mini = maxi = 0
        for i in range(d, len(A)):
            if A[i - d] < A[mini]: mini = i - d
            if A[i - d] > A[maxi]: maxi = i - d
            if A[i] - A[mini] >= valueDifference: return [mini, i]
            if A[maxi] - A[i] >= valueDifference: return [maxi, i]
        return [-1, -1]
```
