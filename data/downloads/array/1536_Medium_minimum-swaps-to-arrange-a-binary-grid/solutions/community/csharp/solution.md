# C# Greedy Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/5669673/](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/5669673/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->Use Greed. Greedy algorithms make a series of choices that seem the best at each step, with the hope that the global optimum will be achieved by these local optimum choices. Here, the greedy choice is to always find the row with the minimum number of trailing zeros that can be moved to satisfy the diagonal constraint.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Counting Trailing Zeros: For each row, count the number of trailing zeros. This will tell us how "far 
//  right" the first 1 is. We store these counts in an array zeroCounts.
//  Validating the Grid: The goal is to ensure that each row i has at least n - 1 - i trailing zeros, where 
//  n is the size of the grid. If it doesn't, we look for a row below it that does and swap the rows.
//  Counting Swaps: If a row cannot be found with enough trailing zeros to meet the requirement, it's 
//  impossible to make the grid valid, and we return -1. Otherwise, we count how many swaps are needed to 
//  get the row with the required number of trailing zeros into the correct position.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n^2), where n is the number of rows.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n).
___

# Code
```csharp []
public class Solution {
    public int MinSwaps(int[][] grid) {
        int n = grid.Length;
        int[] zeroCounts = new int[n];
        
        // Calculate the number of trailing zeros for each row
        for (int i = 0; i < n; i++) {
            int count = 0;
            for (int j = n - 1; j >= 0 && grid[i][j] == 0; j--) {
                count++;
            }
            zeroCounts[i] = count;
        }
        
        int swaps = 0;
        
        // Try to place each row in the correct position
        for (int i = 0; i < n; i++) {
            int target = n - 1 - i;
            int j = i;
            
            // Find the first row with enough trailing zeros
            while (j < n && zeroCounts[j] < target) {
                j++;
            }
            
            // If no such row exists, it's impossible to make the grid valid
            if (j == n) {
                return -1;
            }
            
            // Swap the rows until the correct row is in place
            swaps += j - i;
            int temp = zeroCounts[j];
            for (int k = j; k > i; k--) {
                zeroCounts[k] = zeroCounts[k - 1];
            }
            zeroCounts[i] = temp;
        }
        
        return swaps;
    }
}
```