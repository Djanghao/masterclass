# [Python3] DP on tree + DFS + sorting (O(nlogn))

**Author:** xy-li
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/solutions/6077416/](https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/solutions/6077416/)

---

For each node `root`, consider how many children nodes `child`  it could have:

1. `k` children: take `k` children, each `child` can have only at most `k-1` children (grandchildren for `root`), and then this `root` can't be connected to its parent anymore
2. `k-1` children: take only `k-1` children, each `child` can have at most `k` children (grandchildren for `root`), and then this `root` can be connected to its parent

So we only need to know every subtree rooted at a node with at most `k` or `k-1` children. Let's select one node as the root of the whole tree, do the top-down DP using DFS, each round we need to know how its children perform as a subtree with at most `k` or `k-1` children.

How to choose the `k` or `k-1` connected children? Recall that the selected children can have only at most`k-1` children, while the rest can have at most `k` children. As we already know the DP states of each candidate nodes with the  result of `k` or `k-1` children. The problem is reduced to 

> Two arrays `A` and `B`, you can take either A[i] or B[i] to construct C[i], however, you can choose B[i] at most k times, how to make the sum of C the max?

Ask ChatGPT or Claude about this classic question, it will tell you that you should first sort it by `B[i]-A[i]`, pick the largest `k` elements to take the advantage of the big gap between `B[i]-A[i]` , for the rest, just adopt `A[i]`.

My code for reference:
```
from collections import defaultdict
class Solution:
    def maximizeSumOfWeights(self, edges: List[List[int]], k: int) -> int:
        # build the adj list    
        adj = defaultdict(list)
        for u, v, w in edges:
            adj[u].append((v, w))
            adj[v].append((u, w))
            
        def dfs(root, parent):
            children = []
            for child, w in adj[root]:
                if child == parent:
                    continue
                # a -> keep child k edges in its rooted subtree, b -> keep child k-1 edges in its rooted subtree
                a, b = dfs(child, root)
                children.append((b+w, a))
            children.sort(key=lambda x: x[1] - x[0])
            res1 = sum([max(children[i][int(i >= k):]) for i in range(len(children))] or [0])
            res2 = sum([max(children[i][int(i >= k-1):]) for i in range(len(children))] or [0])
            return res1, res2
        
        return max(dfs(0, -1))
```
Every node can show up in the `children` list to be at most once, which indicates that we need to sort at most `n` nodes in all traversals. The bottleneck of time complexity is the sorting process as `O(nlog(n))`.


