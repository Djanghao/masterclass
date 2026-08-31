# Easy Recursive (Beats 100% of submissions)

**Author:** robin1302
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4408914/](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4408914/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use Recursion for only few elements which are zero and more than 1
# Approach
<!-- Describe your approach to solving the problem. -->
- Create two list one containing Zero indexes and another for bulky indexes (> 1)
- Recursively call for each Zero index and try to map it to different bulky elements in for loop.
- Check if the grid value of element is still > 1.
- Perform backtracking.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(M^N)$$  where N: Count of zero and M : Count of > 1
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```
public class Solution {
    public int MinimumMoves(int[][] grid) {
        List<(int,int)> zero = new ();
        List<(int,int)> bulk = new();
        for(int i =0;i<3;i++)
        {
            for(int j =0;j<3;j++)
            {
                if (grid[i][j] == 0)
                {
                    zero.Add((i,j));
                }
                if (grid[i][j] > 1)
                {
                    bulk.Add((i,j));
                }
            }
        }
        int moves = 1000;
        Iterate(zero, bulk, 0, -1, -1, 0, grid,ref moves);
        return moves;
    }

    private void Iterate( List<(int,int)> zero,  List<(int,int)> bulk, int index, int x, int y, int moves,int[][] grid, ref int minMoves)
    {
        if (index >= zero.Count)
        {
            minMoves = Math.Min(minMoves, moves);
            return;
        }
        (int a, int b) = zero[index];
        foreach((int k, int l) in bulk)
        {
            if (grid[k][l] > 1)
            {
                    grid[k][l] -=1;
                    grid[a][b] +=1;
                    int val = Math.Abs(k-a) + Math.Abs(l-b);
                    Iterate(zero, bulk, index+1, k, l, moves+val, grid,ref minMoves);
                    grid[k][l] +=1;
                    grid[a][b] -=1;
            }        
        }
    }
}
```