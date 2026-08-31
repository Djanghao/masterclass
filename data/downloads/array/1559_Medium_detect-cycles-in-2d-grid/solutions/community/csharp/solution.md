# BFS Approach to find the cycle

**Author:** yash_shukla
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/5621661/](https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/5621661/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
BFS Approach to find the cycle in the graph
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n*m)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n*m)$$
# Code
```
public class Solution {
    public bool ContainsCycle(char[][] grid) {
        bool result = false;
        int n = grid.Length;
        int m = grid[0].Length;
        bool[,] visited = new bool[n, m];

        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++)
            {
                if (!visited[i, j])
                {
                    BFS(grid, i, j, n, m, visited, ref result);
                    if (result) return true;
                }
            }
        }


        return false;
    }
    public void BFS(char[][] grid, int i, int j, int n, int m, bool[,] visited, ref bool result)
    {
        int[][] directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        Queue<(char ch, int[] source, int[] parent)> queue = new Queue<(char ch, int[] source, int[] parent)>();

        // enqueue the parent node
        queue.Enqueue((grid[i][j], [i, j], [-1, -1]));
        visited[i, j] = true;

        while (queue.Count > 0)
        {
            var node = queue.Dequeue();

            // iterate over all the four directions

            foreach (var dir in directions)
            {
                int x = node.source[0] + dir[0];
                int y = node.source[1] + dir[1];

                if (x < 0 || y < 0 || x >= n || y >= m || grid[x][y] != node.ch || (x == node.parent[0] && y == node.parent[1])) continue;
                if (visited[x, y])
                {
                    result = true;
                    return;
                }

                queue.Enqueue((grid[x][y], [x, y], [node.source[0], node.source[1]]));
                visited[x, y] = true;
            }

        }
    }
}
```