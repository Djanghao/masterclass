# Recursion

**Author:** Harkness
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/solutions/6077172/](https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/solutions/6077172/)

---

# Intuition
Define `solve(node, has_par, par)` as solving the stated problem at subtree rooted at `node`. `has_par` indicates `node`'s parent exists so it accounts for 1 edge (i.e. at most `k-1` of its children can be active). `par` is the parent of `node` in the input tree (will be used to avoid going back to the parent when iterating `node`'s children).

Inside the function, go through each child of `node`. When handling each child `ch`, compute 2 options:
```
opiton1: keep node->ch edge. we gain pick=graph[node][ch] + solve(ch, 1, node)
option2: don't keep this edge. we gain nopick=solve(ch, 0, node)
```
we store `pick - nopick` in a `cost` array.
Now we just need to pick the elements in `cost` array that has positive values. If there are more than `k` positive values, pick the largest `k`.

# Code
```python3 []
class Solution:
    def maximizeSumOfWeights(self, edges: List[List[int]], k: int) -> int:
        graph = {}
        for a, b, w in edges:
            if a not in graph:
                graph[a] = {}
            if b not in graph:
                graph[b] = {}
            graph[a][b] = graph[b][a] = w
        
        @cache
        def solve(root, has_par, par):
            # print(root, has_par, par)
            costs = []
            for ch in graph[root]:
                if ch == par:
                    continue
                pick = graph[root][ch] + solve(ch, 1, root)
                nopick = solve(ch, 0, root)
                costs.append((pick - nopick, ch))
            costs.sort(key = lambda t : t[0], reverse=True)
            # print('costs=', costs)
            picked = 0
            res = 0
            cur_k = k - has_par
            for c, ch in costs:
                if c > 0 and picked < cur_k:
                    res += graph[root][ch] + solve(ch, 1, root)
                    picked += 1
                else:
                    res += solve(ch, 0, root)
                
            return res
            
                    
        
        return solve(0, 0, None)
```