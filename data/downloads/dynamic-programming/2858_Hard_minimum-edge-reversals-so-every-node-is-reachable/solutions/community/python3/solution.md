# Python 3 || 13 lines, BFS, one traverse || T/S: 98% / 90%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/solutions/4065584/](https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/solutions/4065584/)

---

Here's the plan:

1. We build an adjacency graph, in which the direction of each edge is indicated by including either 1 (not reversed) or -1 (reversed).

1. We intialize: (a) `ans` to track the net difference of reversed and not-reversed edges to each node as we BFS-traverse the tree with root `0`, (b) `zeroCnt` to track the total the net difference of reversed and not-reversed edges in the tree, and (c)'queue' for BFS.

1. Finally, we use these net differences to compute `ans0 = (n-1-zeroCnt)//2` , which then allows us to compute and return the desired list. (The algebraic justification for these computations is left to the interested reader.)
```
class Solution:
    def minEdgeReversals(self, n: int, edges: List[List[int]]) -> List[int]:

        g, ans, zeroCnt = defaultdict(list), defaultdict(int), 0

        for u, v in edges:
            g[u].append((v, 1))
            g[v].append((u,-1))

        queue = deque([(0,0)])

        while queue:
             par, parCnt = queue.pop()
             ans[par] = parCnt

             for chd,cnt in g[par]:
                if chd in ans: continue
                zeroCnt+= cnt
                queue.append((chd,cnt+parCnt))

        ans0 = (n-1-zeroCnt)//2
        return [ans[i] + ans0 for i in range(n)] 
```
[https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/submissions/1053813265/](http://)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `n`.