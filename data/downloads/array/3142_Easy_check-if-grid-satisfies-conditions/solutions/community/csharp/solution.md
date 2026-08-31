# C# simple brute force solution O(1) space

**Author:** nzspider
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5909023/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5909023/)

---

# Code
```csharp []
public class Solution {
    public bool SatisfiesConditions(int[][] grid) {
        int row=grid.Length, col=grid[0].Length, r=0, c=0;
        int ch;
        for(r=0;r<row;r++){
            ch=grid[r][0];
            for(c=1;c<col;c++){
                if(grid[r][c]==ch)return false;
                ch=grid[r][c];       
            }            
        }
        Console.WriteLine("not return");
        for(c=0;c<col;c++){
            ch=grid[0][c];
            for(r=1;r<row;r++){
                if(grid[r][c]!=ch)return false;
            }            
        }
        return true;
    }
}
```