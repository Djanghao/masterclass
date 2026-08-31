# Python 3 | Dijkstra (variation), Greedy | Explanation

**Author:** idontknoooo
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/2848788/](https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/2848788/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- For node `i`, we don't have to find out cost to buy an apple from nodes other than `i`. We only need to find the cheapest buy.
- So far, it sounds like a greedy problem, which can be done by a `BFS` or more appropriate `Dijkstra's Algorithm` with a some tuning

# Approach
<!-- Describe your approach to solving the problem. -->
- Use `Dijkstra` with help of `heap` (min-heap in Python)
  - For each node `i`, you can either:
    - visited & buy apple from here
    - pass by, but not buy apple from here
  - Add above condition for each neighbor node of node `i`
  - Stop the search after you made your first purchase
- Apply the above method for all nodes

# Complexity
- Time complexity: $$O(n^2logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python
class Solution:
    def minCost(self, n: int, roads: List[List[int]], appleCost: List[int], k: int) -> List[int]:
      graph = collections.defaultdict(list)                # build graph
      for s, e, v in roads:
        graph[s].append((e, v * (1+k)))
        graph[e].append((s, v * (1+k)))
      ans = []        
      def dijkstra(node):                                  # Dijkstra variation, quit on the first buy (greedy)
        nonlocal graph, visited
        heap = [(0, node, 0)]                              # (current cost, current node, bought?)
        res = appleCost[node-1]                            # Buy from self
        while heap:
          cur_val, cur_node, bought = heapq.heappop(heap)
          if bought:                                       # Stop on first buy
            res = min(res, cur_val)
            break
          if cur_node in visited: continue                 # avoid revisit
          visited.add(cur_node)
          for nei, cost in graph[cur_node]:
            heapq.heappush(heap, (cur_val + cost, nei, 0)) # bypass this node (without buying)
            heapq.heappush(heap, \\
              (cur_val + cost + appleCost[nei-1], nei, 1)) # bought the apple here
        return res
      for i in range(1, n+1):                              # For each node O(n)
        visited = set()
        ans.append(dijkstra(i))                            # Find the best buy O(nlgn)
      return ans
```