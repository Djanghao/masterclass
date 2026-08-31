# [Java/C++/Python] Sort on Diagonal

**Author:** lee215
**Votes:** 512
**Link:** [https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/489749/](https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/489749/)

---

# **Explanation**
`A[i][j]` on the same diagonal have same value of `i - j`
For each diagonal,
put its elements together, sort, and set them back.
<br>

# **Complexity**
Time `O(MNlogD)`, where `D` is the length of diagonal with `D = min(M,N)`.
Space `O(MN)`
<br>

**Java**
By @hiepit
```java
    public int[][] diagonalSort(int[][] A) {
        int m = A.length, n = A[0].length;
        HashMap<Integer, PriorityQueue<Integer>> d = new HashMap<>();
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                d.putIfAbsent(i - j, new PriorityQueue<>());
                d.get(i - j).add(A[i][j]);
            }
        }
        for (int i = 0; i < m; ++i)
            for (int j = 0; j < n; ++j)
                A[i][j] = d.get(i - j).poll();
        return A;
    }
```
**C++**
```cpp
    vector<vector<int>> diagonalSort(vector<vector<int>>& A) {
        int m = A.size(), n = A[0].size();
        unordered_map<int, priority_queue<int, vector<int>, greater<int>>> diag;
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                diag[i - j].push(A[i][j]);
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                A[i][j] = diag[i - j].top(), diag[i - j].pop();
        return A;
    }
```
**Python:**
```python
    def diagonalSort(self, A: List[List[int]]) -> List[List[int]]:
        n, m = len(A), len(A[0])
        d = defaultdict(list)
        for i in range(n):
            for j in range(m):
                heappush(d[i - j], A[i][j])
        for i in range(n):
            for j in range(m):
                A[i][j] = heappop(d[i - j])
        return A
```
