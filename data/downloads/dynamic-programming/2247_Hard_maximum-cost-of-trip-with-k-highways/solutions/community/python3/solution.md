# [Python] 🔥 35ms | beat 100% | Greedy | Accepted?

**Author:** yixd
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/solutions/5010068/](https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/solutions/5010068/)

---

### The solution is accepted maybe due to incomplete test cases, please help me find a counter test case ###
# Intuition 
<!-- Describe your first thoughts on how to solve this problem. -->
1. If the solution exists, i guess it must exist on the maximum spanning tree of the graph (correct me if i am wrong)
2. Then the problem transforms into finding the path with length k and maximum cost on the maximum spanning tree
3. We can pick every node as the root node and traverse down greedily

# Approach
<!-- Describe your approach to solving the problem. -->
1. Construct the adjacency list for graph representation - O(E)
2. Sort every adjacency list - O(ElogE)
3. Iterate through every node as the root - O(VK)
   1. Traverse down the tree by picking the most costly edge
   2. If reached k highways, update the res

# Complexity
- Time complexity: $$O(ElogE + VK)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(E + V)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import heapq
class Solution:
    def maximumCost(self, n: int, highways: List[List[int]], k: int) -> int:
        if len(highways) < k:
            return -1
        graph = [[] for _ in range(n)]
        for u, v, c in highways:
            graph[u].append((c, v))
            graph[v].append((c, u))
        for i in range(n):
            graph[i].sort(reverse=True)
        
        res = -1
        for u in range(n):
            visited = set([u])
            depth = 0
            cost = 0
            while depth < k:
                prev_depth = depth
                for c, v in graph[u]:
                    if v in visited:
                        continue
                    visited.add(v)
                    cost += c
                    u = v
                    depth += 1
                    break
                if prev_depth == depth:
                    break
            if depth == k:
                res = max(res, cost)
        return res
```