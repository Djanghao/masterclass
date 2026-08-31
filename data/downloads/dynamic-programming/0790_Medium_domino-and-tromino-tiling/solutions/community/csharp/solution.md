# Domino and Tromino Tiling, clean and short DP solution

**Author:** sinanoz
**Votes:** 4
**Link:** [https://leetcode.com/problems/domino-and-tromino-tiling/solutions/2947123/](https://leetcode.com/problems/domino-and-tromino-tiling/solutions/2947123/)

---

# Intuition
When we look at the problem you can see that we can find a solution using Dynamic Programming. Though, it requires a little bit more than a basic DP formulation. 

# Approach
Let us define three different DP arrays : 

- dpr[i] is holding the number of ways to tile on a board of length i;
- dpu[i] is holding the number of ways to tile on a board of length i where first row has one more cell then the second row
- dpd[i] is holding the number of ways to tile on a board of length i where first row has one less cell then the second row
 
If we consider only the right-most(last) tile there are these alternatives: 

-  the last tile is a vertical 2*1 domino. Then the number of ways to tile the previous tiles is dpr[i-1]

- the last tile is a horizontal 2*1 domino. Then there must be another horizontal domino below that and the number of ways to tile the previous tiles is dpr[i-2]

- the last tile is a tromino with 2 cells on the first row.
    1 1
    0 1
    Then, ways to tile the previous tiles is dpd[i-1]

- the last tile is a tromino with 2 cells on the second row.
    0 1
    1 1
    Then, ways to tile the previous tiles is dpu[i-1]

  
so our DP formula for dpr :

    dpr[i] = dpr[i-1] + dpr[i-2] + dpu[i-1] + dpd[i-1]

with similar approach we can find formulas for dpu and dpd

    dpu[i] = dpd[i-1] + dpr[i-2]

    dpd[i] = dpu[i-1] + dpr[i-2]

# Complexity
- Time complexity:
Time complexity to calculate the number of tilings is O(n)


- Space complexity:
Space complexity to calculate the number of tilings is also O(n)

# Code
```
public class Solution {
    const long MODULO = 1000000007;
    public int NumTilings(int n) {
        var dpr = new long[n+1];
        var dpu = new long[n+1];
        var dpd = new long[n+1];
        dpr[0] = 1;
        dpr[1] = 1;
        for (int i = 2; i <= n; i++)
        {
            dpu[i] = (dpd[i-1] + dpr[i-2]) % MODULO;
            dpd[i] = (dpu[i-1] + dpr[i-2]) % MODULO;
            dpr[i] = (dpr[i-1] + dpr[i-2] + dpu[i-1] + dpd[i-1]) % MODULO;
        }

        return (int)dpr[n];
    }
}
```