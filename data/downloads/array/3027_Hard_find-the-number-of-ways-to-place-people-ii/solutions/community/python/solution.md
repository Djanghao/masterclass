# [Java/C++/Python] Sort, O(n^2)

**Author:** lee215
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4672002/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4672002/)

---

# **Explanation**
Sort points by x increasing and y decreasing.
For each point `p[i]`,
itearate all points on its bottom right,
find out the points from bottom left to top right.
<br>

# **Complexity**
Time `O(n^2)`
Space `O(logn)`
<br>

**Java**
```java
    public int numberOfPairs(int[][] A) {
        int res = 0, n = A.length;
        Arrays.sort(A, (a, b) -> a[0] == b[0] ? Integer.compare(b[1], a[1]) : Integer.compare(a[0], b[0]));
        for (int i = 0; i < n; ++i) {
            int y = -(int)2e9;
            for (int j = i + 1; j < n; ++j) {
                if (A[i][1] >= A[j][1] && A[j][1] > y) {
                    res++;
                    y = A[j][1];
                }
            }
        }
        return res;
    }
```

**C++**
```cpp
    int numberOfPairs(vector<vector<int>>& A) {
        int res = 0, n = A.size();
        sort(begin(A), end(A), [](const auto &p, const auto &q){
            return p[0] == q[0] ? p[1] > q[1] : p[0] < q[0];
        });
        for (int i = 0; i < n; ++i) {
            int y = -2e9;
            for (int j = i + 1; j < n; ++j)
                if (A[i][1] >= A[j][1] && A[j][1] > y)
                    res++, y = A[j][1];
        }
        return res;
    }
```

**Python**
```py
    def numberOfPairs(self, A: List[List[int]]) -> int:
        n = len(A)
        A.sort(key=lambda a: (a[0], -a[1]))
        res = 0
        for i in range(n):
            y = -inf
            for j in range(i + 1, n):
                if A[i][1] >= A[j][1] > y:
                    res += 1
                    y = A[j][1]
        return res
```
