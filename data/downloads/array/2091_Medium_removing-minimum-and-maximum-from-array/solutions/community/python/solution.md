# [Java/C++/Python] Straight Forward Solutions

**Author:** lee215
**Votes:** 43
**Link:** [https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/1599848/](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/1599848/)

---

# **Explanation**
Find index `i` of the minimum
Find index `j` of the maximum

To remove element `A[i]`,
we can remove `i + 1` elements from front,
or we can remove `n - i` elements from back.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int minimumDeletions(int[] A) {
        int i = 0, j = 0, n = A.length;
        for (int k = 0; k < n; ++k) {
            if (A[i] < A[k]) i = k;
            if (A[j] > A[k]) j = k;
        }
        return Math.min(Math.min(Math.max(i + 1, j + 1), Math.max(n - i, n - j)), Math.min(i + 1 + n - j, j + 1 + n - i));
    }
```

**C++**
```cpp
    int minimumDeletions(vector<int>& A) {
        int i = 0, j = 0, n = A.size();
        for (int k = 0; k < n; ++k) {
            if (A[i] < A[k]) i = k;
            if (A[j] > A[k]) j = k;
        }
        return min({max(i + 1, j + 1), max(n - i, n - j), i + 1 + n - j, j + 1 + n - i});
    }
```

**Python**
```py
    def minimumDeletions(self, A):
        i, j, n = A.index(min(A)), A.index(max(A)), len(A)
        return min(max(i + 1, j + 1), max(n - i, n - j), i + 1 + n - j, j + 1 + n - i)
```
