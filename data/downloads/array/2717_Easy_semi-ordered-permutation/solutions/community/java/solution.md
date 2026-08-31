# [Java/C++/Python] Index of 1 and n

**Author:** lee215
**Votes:** 23
**Link:** [https://leetcode.com/problems/semi-ordered-permutation/solutions/3595297/](https://leetcode.com/problems/semi-ordered-permutation/solutions/3595297/)

---

# **Explanation**
If index of `1` is `i`,
`1` needs `i` swaps to be the first.

If index of `n` is `j`,
`n` needs `n - 1 - j` swaps to be the first.

If `i < j`,
`res` is `i + (n - 1 - j)`.

If `i > j`,
`res` is `i + (n - 1 - j) - 1`,
save one swap when swap `1` and `n`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int semiOrderedPermutation(int[] A) {
        int n = A.length, i = 0, j = 0;
        for (int k = 0; k < n; k++) {
            if (A[k] == 1) i = k;
            if (A[k] == A.length) j = k;
        }
        return i + n - 1 - j - (i > j ? 1 : 0);
    }
```

**C++**
```cpp
    int semiOrderedPermutation(vector<int>& A) {
        int n = A.size(), i = find(A.begin(), A.end(), 1) - A.begin(), j = find(A.begin(), A.end(), n) - A.begin();
        return i + n - 1 - j - (i > j);
    }
```

**Python**
```py
    def semiOrderedPermutation(self, A: List[int]) -> int:
        n = len(A)
        i, j = A.index(1), A.index(n)
        return i + n - 1 - j - (i > j)
```
