# sum(row) == n - 1

**Author:** votrubac
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/4250394/](https://leetcode.com/problems/find-champion-i/solutions/4250394/)

---

A champion is stronger than `n - 1` teams.

We return `i` if row `g[i]` contains `n - 1` ones.

**Python 3**
```python
class Solution:
    def findChampion(self, g: List[List[int]]) -> int:
        return next(filter(lambda i: sum(g[i]) == len(g) - 1, range(len(g))))
```

**C++**
```cpp
int findChampion(vector<vector<int>>& g) {
    for (int i = 0; i < g.size(); ++i)
        if (accumulate(begin(g[i]), end(g[i]), 0) == g.size() - 1)
            return i;
    return -1;
}
```