# [Java/C++/Python] Compare Slopes, Cross Product

**Author:** lee215
**Votes:** 54
**Link:** [https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2062141/](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2062141/)

---

# **Preword**
I think it expects a solution without decimal.
Knowing well the precision of algorithm is also difficulty of writting codes.
But yes, it will be much more friendly if this case is not hidden.

# **Explanation**
Calculate the slope (A[i-1], A[i]) and (A[i],A[i+1])
Avoid float calculation.
(Fun fact: 0.1 +0.2 != 0.3 in computer science)

From `(y1 - y0) / (x1 - x0) /  == (y2 - y1) / (x2 - x1) ` in float division,
we have `(y1 - y0) * (x2 - x1) ==  (y2 - y1) * (x1 - x0)` in integer multiplication.
<br>

# **Complexity**
Time `O(sort)`
Space `O(sort)`
<br>

**Java**
```java
    public int minimumLines(int[][] A) {
        int n = A.length, res = n - 1;
        Arrays.sort(A, (a, b) -> Integer.compare(a[0], b[0]));
        for (int i = 1; i < n - 1; ++i)
            if (1L * (A[i][0] - A[i - 1][0]) * (A[i + 1][1] - A[i][1]) == 1L * (A[i + 1][0] - A[i][0]) * (A[i][1] - A[i - 1][1]))
                res--;
        return res;
    }
```
**C++**
```cpp
    int minimumLines(vector<vector<int>>& A) {
        int n = A.size(), res = n - 1;
        sort(begin(A), end(A));
        for (int i = 1; i < n - 1; ++i)
            if (1LL * (A[i][0] - A[i-1][0]) * (A[i+1][1] - A[i][1]) == 1LL * (A[i+1][0] - A[i][0]) * (A[i][1] - A[i-1][1]))
                res--;
        return res;    
    }
```

**Python**
```py
    def minimumLines(self, A: List[List[int]]) -> int:
        n = len(A)
        res = n - 1
        A.sort()
        for i in range(1, n - 1):
            a, b, c = A[i-1], A[i], A[i+1]
            if (b[0] - a[0]) * (c[1] - b[1]) == (c[0] - b[0]) * (b[1] - a[1]):
                res -= 1
        return res
```
