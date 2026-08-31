# [Java/C++/Python] Sort

**Author:** lee215
**Votes:** 51
**Link:** [https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/2040152/](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/2040152/)

---

# **Explanation**
Sort `special` floors.
The max consecutive floors between special is `A[i] - A[i-1] - 1`
The top consecutive floors is `top - A[n - 1]`
The bottom consecutive floors is `A[0] - bottom`
<br>

# **Complexity**
Time `O(sort)`
Space `O(sort)`
<br>

**Java**
```java
    public int maxConsecutive(int bottom, int top, int[] A) {
        Arrays.sort(A);
        int n = A.length, res = Math.max(A[0] - bottom, top - A[n - 1]);
        for (int i = 1; i < n; ++i)
            res = Math.max(res, A[i] - A[i - 1] - 1);
        return res;
    }
```

**C++**
```cpp
    int maxConsecutive(int bottom, int top, vector<int>& A) {
        sort(begin(A), end(A));
        int n = A.size(), res = max(A[0] - bottom, top - A[n - 1]);
        for (int i = 1; i < n; ++i)
            res = max(res, A[i] - A[i - 1] - 1);
        return res;
    }
```

**Python**
```py
    def maxConsecutive(self, bottom, top, A):
        A.sort()
        res = max(top - A[-1], A[0] - bottom)
        for i in range(1, len(A)):
            res = max(res, A[i] - A[i - 1] - 1)
        return res
```
