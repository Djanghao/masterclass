# Heap with explanation and time complexity

**Author:** yorkshire
**Votes:** 20
**Link:** [https://leetcode.com/problems/trapping-rain-water-ii/solutions/89473/](https://leetcode.com/problems/trapping-rain-water-ii/solutions/89473/)

---

Initially the heap contains all cells on the perimeter of the map.  Because it is ordered in increasing height, the first cell popped is the lowest point on the outer wall.
Check the 4 neighbours, ignoring any already explored (in the heap or have already been popped off the heap) or outside the map.
If a newly discovered neighbour is lower than the current cell then water can be added on top of it.  We know the water cannot flow out anywhere because the current cell is the lowest.
Add the water to this neighbouring cell (zero if neighbour is higher than cell) and push neighbour with its new height onto the heap.

We are effectively continually raising the water level, filling in any "holes" as we go.

Every cell is pushed and popped from the heap, which is O(mn log(mn))

In Python,
```
    def trapRainWater(self, heightMap):
        if not heightMap or not heightMap[0]:
            return 0
            
        rows, cols = len(heightMap), len(heightMap[0])
        water = 0
        q = []

        for r in range(rows):
            heapq.heappush(q, (heightMap[r][0], r, 0))    
            heapq.heappush(q, (heightMap[r][cols - 1], r, cols - 1))    
        for c in range(1, cols - 1):
            heapq.heappush(q, (heightMap[0][c], 0, c))    
            heapq.heappush(q, (heightMap[rows - 1][c], rows - 1, c))    
    
        visited = {(r, c) for _, r, c in q}

        while q:
            
            h, r, c = heapq.heappop(q)
            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                r1, c1 = r + dr, c + dc
                if (r1, c1) not in visited and r1 >= 0 and c1 >= 0 and r1 < rows and c1 < cols:
                    visited.add((r1, c1))
                    water += max(0, h - heightMap[r1][c1])
                    heapq.heappush(q, (max(h, heightMap[r1][c1]), r1, c1))
                
        return water
```