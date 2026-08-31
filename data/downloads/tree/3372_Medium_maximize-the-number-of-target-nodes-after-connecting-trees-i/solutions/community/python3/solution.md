# [Python3] brute-force

**Author:** ye15
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6098916/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6098916/)

---

**Intuition**
Essentially, this is a brute-force approach. For the two trees, we calculate the target nodes. For tree 1, we run DFS on each node to count its target nodes of `k`. For tree 2, we do similar but count target nodes of `k-1`. This is to account for the cost of the added edge. For tree 2, we want the largest count of target nodes and apply it to all nodes of tree 1. 

**Analysis**
Time complexity `O(N^2 + M^2)`
Space complexity `O(N + M)`

**Implementation**
```
class Solution:
    def maxTargetNodes(self, edges1: List[List[int]], edges2: List[List[int]], k: int) -> List[int]:
        
        def fn(edges, k): 
            n = len(edges)+1
            tree = [[] for _ in range(n)]
            for u, v in edges: 
                tree[u].append(v)
                tree[v].append(u)
            ans = [0]*n
            for x in range(n): 
                stack = [(x, -1, 0)]
                while stack: 
                    u, p, d = stack.pop()
                    if d <= k: ans[x] += 1
                    for v in tree[u]: 
                        if v != p: 
                            stack.append((v, u, d+1))
            return ans 
        
        most = max(fn(edges2, k-1))
        return [x+most for x in fn(edges1, k)]
```