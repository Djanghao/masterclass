# Easy to follow BFS

**Author:** mightt
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/3761249/](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/3761249/)

---


# Approach
Easy to follow solution, we try every combination through BFS and when we exceed the obstacle amount we abandon that route.

# Complexity
- Time complexity:
O(nk)

- Space complexity:
O(nk)

# Code
```
public class Solution {
    public int ShortestPath(int[][] grid, int k) {
        Queue<(int x, int y, int obs, int steps)> q = new ();
        HashSet<(int x, int y, int obs)> visited = new ();

        q.Enqueue((0,0,0,0));
        while(q.Count > 0 )
        {
            (int x, int y, int obs, int steps) node = q.Dequeue();

            if(node.x == grid.Length - 1 && node.y == grid[0].Length - 1)
            {
                return node.steps;
            }

            if(visited.Contains((node.x,node.y,node.obs)))
            {
                continue;
            }

            visited.Add((node.x,node.y,node.obs));

            if(node.obs > k)
            {
                continue;
            }

            if(node.x + 1 < grid.Length)
                q.Enqueue((node.x + 1, node.y, node.obs + grid[node.x + 1][node.y], node.steps + 1));

            if(node.y + 1 < grid[0].Length)
                q.Enqueue((node.x, node.y + 1, node.obs + grid[node.x][node.y + 1], node.steps + 1));

            if(node.x - 1 >= 0)
                q.Enqueue((node.x - 1, node.y, node.obs + grid[node.x - 1][node.y], node.steps + 1));

            if(node.y - 1 >= 0)
                q.Enqueue((node.x, node.y - 1, node.obs + grid[node.x][node.y - 1], node.steps + 1));
        }

        return -1;
    }
}
```