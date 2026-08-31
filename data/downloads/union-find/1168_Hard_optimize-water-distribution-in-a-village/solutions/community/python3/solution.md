# (With Explanation) Union-Find Kruskal’s Minimum Spanning Python

**Author:** ilkercankaya
**Votes:** 8
**Link:** [https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/365844/](https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/365844/)

---

The idea is to imagine that there is a well with a house number of 0. Each well[i] is a connection between house 0 and house number "i" with a cost of well[i]. Then the rest becomes a regular spanning tree question.

```
class Solution:
    def minCostToSupplyWater(self, n: int, wells: List[int], pipes: List[List[int]]) -> int:
        n += 1
        parents = [-1] * n

        def find(a):
            if parents[a] == -1:
                return a
            else:
                parents[a] = find(parents[a])
                return parents[a]

        def union(a, b, cost):
            parentA = find(a)
            parentB = find(b)

            if parentA != parentB:
                parents[parentB] = parentA
                return cost

            return 0

        edgesList = [(wells[i - 1], 0, i) for i in range(1, n)]

        for cityOne, cityTwo, cost in pipes:
            edgesList.append((cost, cityOne, cityTwo))

        edgesList.sort()

        totalCost = 0
        for cost, cityOne, cityTwo in edgesList:
            totalCost += union(cityOne, cityTwo, cost)

        return totalCost
```