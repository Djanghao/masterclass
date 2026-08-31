# Python Djikstra With Explanation

**Author:** jzrand
**Votes:** 17
**Link:** [https://leetcode.com/problems/path-with-maximum-probability/solutions/731659/](https://leetcode.com/problems/path-with-maximum-probability/solutions/731659/)

---

Time Complexity - O(E logV)

This can be solved using standard Djikstra's algorithm with a slight difference in how we calculate the weight.

In the usual algorithm, in each step we try to get the vertex with the min distance to it.
Here, all we need to do is change that to the next vertex with the max probability.

So, we use a max heap and instead of sums of distances, we use products of the probabilites of each edge.
```
from heapq import heappush, heappop
class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start: int, end: int) -> float:
        graph = self.build_graph(edges, succProb)
        seen = set()
        
		# Start with 1 since we are dealing with probabilites.
		# -ve sign to make python's min heap work as a max heap
        max_heap = [(-1, start)]
        
        while max_heap:
            prob, cur = heappop(max_heap)
			# Maintain a seen set so that we do not visit a vertex we already processed
			# This is to avoid putting us in an infinite loop since a path from start to end is not always guaranteed
            seen.add(cur)
            if cur == end:
                return -prob
            for neigh, p in graph.get(cur, []):
                if not neigh in seen:
                    new_prob = -1 * abs(prob*p)
                    heappush(max_heap, (new_prob, neigh))
					
		# No path from start to end
        return 0
    
    def build_graph(self, edges, succProb):
        graph = {}
        for i in range(len(edges)):
            cur_edge = edges[i]
            cur_prob = succProb[i]
            graph.setdefault(cur_edge[0], []).append((cur_edge[1], cur_prob))
            graph.setdefault(cur_edge[1], []).append((cur_edge[0], cur_prob))
        return graph
```