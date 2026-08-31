# [Java/C++/Python] Modulo

**Author:** lee215
**Votes:** 11
**Link:** [https://leetcode.com/problems/transformed-array/solutions/6124647/](https://leetcode.com/problems/transformed-array/solutions/6124647/)

---

# **Explanation**
Module on `A[i]` to make it small.
`A[i] % n + n` to make it positive.

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

```Java [Java]
    public int[] constructTransformedArray(int[] A) {
        int n = A.length;
        int res[] = new int[n];
        for (int i = 0; i < n; ++i) {
            res[i] = A[(i + A[i] % n + n) % n];
        }
        return res;
    }
```

```C++ [C++]
    vector<int> constructTransformedArray(vector<int>& A) {
        int n = A.size();
        vector<int> res(n);
        for (int i = 0; i < n; ++i) {
            res[i] = A[(i + A[i] % n + n) % n];
        }
        return res;
    }
```

```py [Python3]
    def constructTransformedArray(self, A: List[int]) -> List[int]:
        n = len(A)
        res = [0] * n
        for i,a in enumerate(A):
            res[i] = A[(i + a) % n]
        return res
```
