# [C#] Simulate the three scenarios

**Author:** cupholder7
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4814242/](https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4814242/)

---

# Intuition
According to the rules, the Y can consist of either all 0's, all 1's, or all 2's. Find the number of operations needed in all three scenarios and return the one with the least amount.

If we want the Y to consist of 0's, we need to change the 1's and 2's in the Y portion to 0's. According to the rules, we also need to change the 0's in the non-Y portion of the grid to either 1 or 2. To minimize the number of operations, we choose to change all 2's to 1's if there are more 1's than 2's in the non-Y portion of the grid. We choose to change all 1's to 2's if there are more 2's than 1's in the non-Y portion of the grid.

Repeat this logic for the scenarios where the Y consists of 1's and the scenario where the Y consists of 2's. Then return the necessary operations with the least value out of the three scenarios.

The tricky part for me was to figure out a way to distinguish cells that are part of the Y's top half. This can be done by knowing a common feature of (row+col) or (row-col) for cells diagnoal to eachother. See below.

# Approach
- Count the number of 0, 1, and 2 values in the Y portion of the grid.
- Count the number of 0, 1, and 2 values in the non-Y portion of the grid.
- For the upper portion of the Y, you can distinguish between cells that are not part of the Y and cells that are part of the Y by checking the two diagonals. The diagonal that moves from top-left to bottom-right will always have the same row and column value. The diagonal that moves from top-right to bottom-left will have the relationship (row+column) == grid.Length-1.
- For the bottom portion of the Y, you just need to know if the cell is in the middle column.
- Now simulate all three scenarios and calculate the number of operations needed to complete each. Return the least:
- For the 0 scenario, the number of operations is: (The number of 1's and 2's in the Y portion) + (The number of 0's in the non-Y portion) + (The lesser frequency between 1's and 2's in the non-Y portion)
- Repeat for the 1 and 2 scenario.

# Complexity
- Time complexity:
O(N) you will check all the values in the grid

- Space complexity:
O(1)

# Code
```
public class Solution {
    public int MinimumOperationsToWriteY(int[][] grid) {
        int ans = Int32.MaxValue;
        int[] inY = new int[3];
        int[] notInY = new int[3];
        
        for(int i = 0; i < grid.Length; i++)
        {
            for(int j = 0; j < grid[0].Length; j++)
            {
                if(i < grid.Length/2)
                {
                    if(i + j == grid.Length-1 || i == j)
                        inY[grid[i][j]]++;
                    else
                        notInY[grid[i][j]]++;
                }
                else
                {
                    if(j == grid[0].Length/2)
                    {
                        inY[grid[i][j]]++;
                    }
                    else
                    {
                        notInY[grid[i][j]]++;
                    }
                }
            }
        }
        ans = Math.Min(ans, inY[1]+inY[2]+notInY[0]+Math.Min(notInY[1],notInY[2])); // 0 in Y
        ans = Math.Min(ans, inY[0]+inY[2]+notInY[1]+Math.Min(notInY[0],notInY[2])); // 1 in Y
        ans = Math.Min(ans, inY[0]+inY[1]+notInY[2]+Math.Min(notInY[0],notInY[1])); // 2 in Y
        return ans;
    }
}
```