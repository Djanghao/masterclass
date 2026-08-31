# C# Simulation Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/where-will-the-ball-fall/solutions/5711249/](https://leetcode.com/problems/where-will-the-ball-fall/solutions/5711249/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->This type of solution is often referred to as simulation. In this approach, you simulate the actual process described in the problem, step by step, to determine the result. In this case, you simulate the path of each ball as it travels through the grid.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Initialization: We start by defining the size of the grid (m and n). We then initialize an array result 
//  of size n to store the result for each ball.
//  Iterating Over Each Ball: We iterate over each column i where a ball is dropped.
//  Simulating the Fall:
//  *We start from the top of the grid (row 0) and simulate the ball's movement until it either exits the 
//  grid or gets stuck.
//  *For each row, we calculate the nextCol based on the direction of the board (grid[row][col]).
//  *We check if the ball will get stuck or go out of bounds:
//  **If nextCol is out of bounds (less than 0 or greater than or equal to n).
//  **If the board at the current position and the next position are not aligned (i.e., they form a "V" or 
//  "\u039B" shape).
//  *If the ball gets stuck, we set col to -1 and break out of the loop.
//  Recording the Result: After the loop for each ball, if the ball successfully exits the grid, col will 
//  contain the column number where it exits. Otherwise, it will contain -1.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(m * n), where 'm' is the number of rows in the grid.
'n' is the number of columns (also the number of balls).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n). This comes from the array result which stores the final output for each of the n balls. Other than this, the solution uses a constant amount of extra space, which makes the overall space complexity dependent only on the size of the output array.
___

# Code
```csharp []
public class Solution {
    public int[] FindBall(int[][] grid) {
        int m = grid.Length;
        int n = grid[0].Length;
        int[] result = new int[n];

        for (int i = 0; i < n; i++) {
            int col = i;
            for (int row = 0; row < m; row++) {
                int nextCol = col + grid[row][col];

                // Check if the ball gets stuck or moves out of bounds
                if (nextCol < 0 || nextCol >= n || grid[row][col] != grid[row][nextCol]) {
                    col = -1;
                    break;
                }
                col = nextCol;
            }
            result[i] = col;
        }

        return result;
    }
}
```