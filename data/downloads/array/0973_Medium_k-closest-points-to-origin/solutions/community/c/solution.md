# [Java/C++/Python] O(N)

**Author:** lee215
**Votes:** 155
**Link:** [https://leetcode.com/problems/k-closest-points-to-origin/solutions/217999/](https://leetcode.com/problems/k-closest-points-to-origin/solutions/217999/)

---

**C++**
`O(n)` quick select
```cpp
    vector<vector<int>> kClosest(vector<vector<int>>& A, int k) {
        sort(A.begin(), A.end(), [](vector<int>& a, vector<int>& b) {
            return a[0] * a[0] + a[1] * a[1] < b[0] * b[0] + b[1] * b[1];
        });
        return vector<vector<int>>(A.begin(), A.begin() + k);
    }
```

**Java**
Sort all points and return `k` first, `O(nlogn)`
```java
    public int[][] kClosest(int[][] points, int k) {
        Arrays.sort(points, Comparator.comparing(p -> p[0] * p[0] + p[1] * p[1]));
        return Arrays.copyOfRange(points, 0, k);
    }
```

**Python2**
Sort using heap of size `k`, `O(nlogk)`
```py
    def kClosest(self, points, k):
        return nsmallest(K, points, lambda (x, y): x * x + y * y)
```

**Python**
Use abs of complex.
```py
    def kClosest(self, A, k):
        return nsmallest(k, A, lambda p: abs(complex(*p)))
```
