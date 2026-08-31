# Djikstra Algorithm

**Author:** trickerCS
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/4584077/](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/4584077/)

---

# Code
```
public class Solution {
    public int MinCost(int[][] grid) {
        var pq = new PriorityQueue<(int X, int Y, int Cost), int>();
        var visited = new HashSet<(int x, int y)>();
        var offsets = new []{new []{0,1}, new []{0,-1}, new []{1,0}, new []{-1,0}};

        pq.Enqueue((0,0,0), 0);

        while(pq.Count > 0)
        {
            var item = pq.Dequeue();
            var x = item.X;
            var y = item.Y;
            var cost = item.Cost;

            if(x == grid.Length - 1 && y == grid[0].Length - 1) return cost;
            if(visited.Contains((x,y))) continue;
            
            visited.Add((x,y));
            for(int i=0; i<offsets.Length; i++)
            {
                var childX = x + offsets[i][0];
                var childY = y + offsets[i][1];
                if(childX >= 0 && childX < grid.Length && childY >= 0 && childY < grid[0].Length)
                {
                    var childCost = (i + 1 == grid[x][y]) ? cost : cost+1;
                    pq.Enqueue((childX, childY, childCost), childCost);
                }
            }

        }

        return -1;
    }
}
```