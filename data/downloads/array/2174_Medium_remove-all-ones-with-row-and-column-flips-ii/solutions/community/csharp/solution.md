# Recursion

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/4958396/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/4958396/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int RemoveOnes(int[][] grid) {
        int r= grid.Length;
        int c = grid[0].Length;
        int minOp = Int32.MaxValue;
        MinOperations(grid, r, c, 0, ref minOp);
        return minOp;
    }

    private void MinOperations(int[][] grid, int r, int c, int op, ref int minOp)
    {
        bool found = false;
        
        for(int i=0; i<r; i++)
        {
            for(int j=0; j<c; j++)
            {
                if (grid[i][j] == 1)
                {
                    found = true;
                    int[] orow = MakeRow(grid, i, r, c);
                    int[] ocol = MakeCol(grid, j, r, c);
                    //Print(grid, r,c);
                    //Console.WriteLine("Init-------------");
                    MinOperations(grid, r, c, op+1, ref minOp);
                    MakeRowOg(grid, i, r, c, orow);
                    MakeColOg(grid, j, r, c, ocol);
                    grid[i][j] = 1;
                    //Print(grid, r,c);
                    //Console.WriteLine("-------------");
                    
                }
            }
        }
        //Console.WriteLine($"op : {op} : {found}");
        if (found == false)
        {
            minOp = Math.Min(minOp, op);
        }
    }

    private void Print(int[][] grid, int r, int c)
    {
        for(int i=0; i<r; i++)
        {
            for(int j=0; j<c; j++)
            {
                Console.Write($"{grid[i][j]} ");
            }
            Console.WriteLine("");
        }
    }

    private int[] MakeRow(int[][] grid, int row, int r, int c)
    {
        int[] ogRow = new int[c];
        for(int i=0; i<c; i++)
        {
            ogRow[i] = grid[row][i];
            grid[row][i] = 0;
        }
        return ogRow;
    }

     private int[] MakeCol(int[][] grid, int col, int r, int c)
    {
        int[] ogCol = new int[r];
        for(int i=0; i<r; i++)
        {
            ogCol[i] = grid[i][col];
            grid[i][col] = 0;
        }
        return ogCol;
    }

    private void MakeRowOg(int[][] grid, int row, int r, int c, int[] ogRow)
    {
        for(int i=0; i<c; i++)
        {
            grid[row][i] = ogRow[i];
        }
    }

     private void MakeColOg(int[][] grid, int col, int r, int c, int[] ogCol)
    {
        for(int i=0; i<r; i++)
        {
            grid[i][col] = ogCol[i];
        }
    }
}
```