# Zero Indegree

**Author:** votrubac
**Votes:** 13
**Link:** [https://leetcode.com/problems/find-champion-ii/solutions/4250379/](https://leetcode.com/problems/find-champion-ii/solutions/4250379/)

---

We find a team with zero indegree. That means that there are no other team stronger than this one.

If there are several teams with zero indegree, we return `-1`.
**Python 3**
```python
class Solution:
    def findChampion(self, n: int, edges: List[List[int]]) -> int:
        weak = {b for a, b in edges}
        return -1 if len(weak) < n - 1 else n * (n - 1) // 2 - sum(weak)
```

**C++**
```cpp
int findChampion(int n, vector<vector<int>>& edges) {
    vector<bool> lost(n);
    for (const auto &e : edges)
        lost[e[1]] = true;
    int j = find(begin(lost), end(lost), false) - begin(lost);
    return count(begin(lost), end(lost), false) == 1 ? j : -1;
}
```