# Dijkstra Algorithm, and a list of similar questions

**Author:** Dark_Exciton
**Votes:** 10
**Link:** [https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/1710983/](https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/1710983/)

---

If you are new to Dijkstra, see my other posts with graph explanations. https://leetcode.com/problems/the-maze-ii/discuss/1377876/improved-dijkstra-based-on-the-most-voted-solution/1208402

For such matrix-like problem, can always think about coverting it to a graph problem: each cell represents a node in graph and is connected to its for different neighbors. The number of the cell represent the the weight.

Then the question is then translated to: starting from the start point, find k nodes (meaing that the cell's value should not be 0 according to the question) according to the **rule** provided.

Thinking about the Dijkstra Algorithm, it can rank the nodes accoding a **rule** of measuing the accumulated weights of edges from the starting point to the nodes. In this sense, we can just use the Dikstra Algorithm and replace its classical rule with the rule provided here. Bingo!

Similar Leetcode problems can be solved with the same paradigm:
https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/
https://leetcode.com/problems/swim-in-rising-water/

```
import heapq
class Solution:
    def highestRankedKItems(self, grid: List[List[int]], pricing: List[int], start: List[int], k: int) -> List[List[int]]:
        row, col = len(grid), len(grid[0])
        q = [(0, grid[start[0]][start[1]], start[0], start[1])]
        visit = set()
        result = []
        while q:
            dis, price, x, y = heapq.heappop(q)
            if (x, y) in visit:
                continue
            visit.add((x, y))
            if price != 1 and price >= pricing[0] and price <= pricing[1]:
                result.append([x, y])
            if len(result) == k:
                return result
            for dx, dy in (0, 1), (0, -1), (1, 0), (-1, 0):
                new_x, new_y = x + dx, y + dy
                if 0 <= new_x < row and 0 <= new_y < col and (new_x, new_y) not in visit:
                    temp = grid[new_x][new_y]
                    if temp == 0:
                        continue
                    elif temp == 1:
                        heapq.heappush(q, (dis + 1, 1, new_x, new_y))
                    else:
                        heapq.heappush(q, (dis + 1, temp, new_x, new_y))
        
        return result
```