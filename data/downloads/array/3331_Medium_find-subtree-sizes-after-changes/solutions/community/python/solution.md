# One dfs. Fast

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subtree-sizes-after-changes/solutions/6008328/](https://leetcode.com/problems/find-subtree-sizes-after-changes/solutions/6008328/)

---

```
class Solution:
    def findSubtreeSizes(self, parent: List[int], s: str) -> List[int]:
        def dfs(node):
            prev = ancestor[s[node]]
            ancestor[s[node]] = node
            for nei in adj_list[node]:
                dfs(nei)
                if ancestor[s[nei]] == -1:
                    res[node] += res[nei]
                else:
                    res[ancestor[s[nei]]] += res[nei]
            ancestor[s[node]] = prev
            
        N = len(s)
        s = [ord(c) - 97 for c in s]
        adj_list = defaultdict(list)
        for node in range(1, N):
            adj_list[parent[node]].append(node)
        res = [1] * N
        ancestor = [-1] * 26
        dfs(0)
        return res
```