# Easy to understand O(m*n) solution

**Author:** ashis_kar
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5581169/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5581169/)

---

# Approach
Simply approach is to check all the rows and get the count of numbers which needs to be fliped to make all rows palindrome. Then do the same for all columns. These counts can be obtained by simple 2 pointer method similar to palindrome check.
Then return the minimum of row and column result.

# Complexity
- Time complexity:$$O(m*n)$$

- Space complexity:$$O(1)$$

# Code
```
public class Solution {
    public int MinFlips(int[][] grid) {
        int m=grid.Length;
        int n=grid[0].Length;
        int row=0;
        int col=0;
        for(int i=0; i<m; i++)
        {
            row+=RowHelper(grid,i);
        }
        for(int j=0; j<n; j++)
        {
            col+=ColHelper(grid,j);
        }
        return Math.Min(row,col);
    }

    int RowHelper(int[][] grid, int i)
    {
        int start=0; 
        int end=grid[i].Length-1;
        int count=0;
        while(start<end)
        {
            if(grid[i][start]!=grid[i][end]) count++;
            start++;
            end--;
        }
        return count;
    }

    int ColHelper(int[][] grid, int j)
    {
        int start=0; 
        int end=grid.Length-1;
        int count=0;
        while(start<end)
        {
            if(grid[start][j]!=grid[end][j]) count++;
            start++;
            end--;
        }
        return count;
    }
}
```