# [Java/C++/Python] Sort + Greedy

**Author:** lee215
**Votes:** 33
**Link:** [https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5017171/](https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5017171/)

---

# **Explanation**
Sort points by x.
Iterate all points,
if not coverd, `res++`,
update the `last` that can cover.
<br>

# **Complexity**
Time `O(sort)`
Space `O(sort)`
<br>

**Java**
```java
    public int minRectanglesToCoverPoints(int[][] A, int w) {
        Arrays.sort(A, (a, b)->a[0] - b[0]);
        int res = 0, last = -1;
        for (int[] a : A) {
            if (a[0] > last) {
                res++;
                last = a[0] + w;
            }
        }
        return res;
    }
```

**C++**
```cpp
    int minRectanglesToCoverPoints(vector<vector<int>>& A, int w) {
        sort(A.begin(), A.end());
        int res = 0, last = -1;
        for (auto& a: A)
            if (a[0] > last)
                res++, last = a[0] + w;
        return res;
    }
```

**Python**
```py
    def minRectanglesToCoverPoints(self, A: List[List[int]], w: int) -> int:
        res = 0
        last = -1
        for x, y in sorted(A):
            if x > last:
                res += 1
                last = x + w
        return res
```
