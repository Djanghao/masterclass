# Simple solution | C# | 100% runtime efficient

**Author:** Baymax_
**Votes:** 11
**Link:** [https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/3584396/](https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/3584396/)

---

# Intuition & Approach
<!-- Describe your first thoughts on how to solve this problem. -->
*We'll use simple BFS approach to visit neighbouirng 8 cells in each iteration till we reach the right-bottom cell.*

![Screenshot 2023-06-01 092404.png](./images/0.png)

***While visiting each cell with value '0', we'll update it's value with the distance so far from the left-top cell. This can help us in avoiding using separate array/hashset to track visited cells.***

*We'll use Queues of tuples to push cordinates of each cell to be visited next.*
<br>


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N^2) - as we enqueue at most all N^2 elements in the array in the worst case.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N^2) - as we push N^2 elements in worst case

## Please upvote if you like the approach

# Code
```
public class Solution {
    public int ShortestPathBinaryMatrix(int[][] grid) {
        int n = grid.Length;
        //check if top-left and bottom-right cells are 0.
        if (grid[0][0] != 0 || grid[n - 1][n - 1 ] != 0)
            return -1;

        //check if there's only one cell, if yes - check if it is 0
        if (n == 1 && grid[0][0] == 0)
            return 1;

        //Get moves to be made to traverse in 8 directions
        List<(int r, int c)> directions = GetDirections();

        //Queue to hold cordinates of cell to be visited next
        Queue<(int x, int y)> q = new Queue<(int, int)>();
        q.Enqueue((0, 0));
        grid[0][0] = 1;

        while (q.Count > 0)
        {
            (int cr, int cc) = q.Dequeue();
        
            //fixed 8 loops - O(1) runtime for this loop
            for (int i = 0; i < directions.Count; i++)
            {
                //neighbouring row-col cell to check
                int row = cr + directions[i].r;
                int col = cc + directions[i].c;
                if (row >= 0 && row < n
                    && col >= 0 && col < n && grid[row][col] == 0)
                {
                    grid[row][col] = grid[cr][cc] + 1;
                    //if we have reached bottom-right cell
                    if (row == n - 1 && col == n - 1)
                        return (grid[row][col]);

                    q.Enqueue((row, col));
                }
            }
        }

        return -1;
    }

    private List<(int, int)> GetDirections()
    {
        List<(int r, int c)> directions = new List<(int, int)>();
        directions.Add((-1, -1));
        directions.Add((-1, 0));
        directions.Add((-1, 1));
        directions.Add((0, -1));
        directions.Add((0, 1));
        directions.Add((1, -1));
        directions.Add((1, 0));
        directions.Add((1, 1));

        return directions;
    }
}
```

## Please upvote if you like the approach, as it would encourage us more :)
![Upvote please - Monkey.jpg](./images/1.jpeg)
