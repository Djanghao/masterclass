# O(n3) Minimalism

**Author:** votrubac
**Votes:** 11
**Link:** [https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/solutions/1584212/](https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/solutions/1584212/)

---

The key to avoid duplicate cycles (and visiting the same node again) is to traverse nodes in increasing order. That is, we only do `[1, 2, 3]` and never `[2, 3, 1]`.

After we identify 3 nodes, we check if there is a connection between the first and last node to count it as a loop.

With this, we can write a DFS solution. However, since we only need to check triplets, three loops will do.

> I tried a few container options for edges; adjacency list (backed by a hash set) was fastest for Python, and a boolean adjacency matrix - for C++.

**Python 3**
```python
class Solution:
    def numberOfPaths(self, n: int, corridors: List[List[int]]) -> int:
        al, res = [set() for _ in range(n + 1)], 0
        for (p1, p2) in corridors:
            al[min(p1, p2)].add(max(p1, p2))
        for i in range(n + 1):
            for j in al[i]:
                for k in al[j]:
                    res += 1 if k in al[i] else 0
        return res
```

**Java**
```java
public int numberOfPaths(int n, int[][] corridors) {
    boolean[][] am = new boolean[n + 1][n + 1];
    int res = 0;
    for (var c : corridors)
        am[Math.min(c[0], c[1])][Math.max(c[0], c[1])] = true;
    for (int i = 1; i < n; ++i)
        for (int j = i + 1; j < n; ++j)
            for (int k = j + 1; am[i][j] && k <= n; ++k)
                res += am[j][k] && am[i][k] ? 1 : 0;        
    return res;
}
```

**C++**
```cpp
int numberOfPaths(int n, vector<vector<int>>& corridors) {
    bool am[1001][1001] = {};
    for (auto &c : corridors)
        am[min(c[0], c[1])][max(c[0], c[1])] = true;
    int res = 0;
    for (int i = 1; i < n; ++i)
        for (int j = i + 1; j < n; ++j)
            for (int k = j + 1; am[i][j] && k <= n; ++k)
                res += am[j][k] && am[i][k];
    return res;
}
```