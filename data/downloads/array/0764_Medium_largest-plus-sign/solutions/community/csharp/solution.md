# C# two pass dp solution | 136ms 100%

**Author:** Legon2k
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-plus-sign/solutions/4706269/](https://leetcode.com/problems/largest-plus-sign/solutions/4706269/)

---

# Approach
I track and keep in DP arrays distances from one mine to another in a rows and in a columns. When find for example in a row sequence 0 (mine), 1, 2, 3, 4, 5, 0(mine) I transform [1..5] sequence to [1,2,3,2,1]. 

The final result will be a cell with 
    Max(Min(left-right[r,c], top-down[r,c]))

I use fake guards mines at the first and last positions for each row and columns. It helps to avoid previous indexes checks.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

# Code
```
public class Solution {
    public int OrderOfLargestPlusSign(int n, int[][] mineList) 
    {
        n = n + 2; // +2 introduces fake guards to simplify logic

        var mines = new bool[n][];

        for(var r = 0; r < n ; r++) 
        {
            // first and last rows are guards
            mines[r] = Enumerable.Repeat(r == 0 || r == n-1, n).ToArray();
            mines[r][0] = true; // first and last cells at row are guards
            mines[r][^1] = true;
        }

        foreach(var m in mineList) 
            mines[m[0]+1][m[1]+1] = true;

        // Smart left-right, top-down DP values. 
        // Keep min distance to mine looking to left and right, top and down
        var lr = new int[n, n];
        var td = new int[n, n];

        for(var r = 1; r < n; r++) 
        {
            for(var c = 1; c < n; c++)
            {
                if(!mines[r][c])
                {
                    lr[r, c] = 1 + lr[r, c-1];
                    td[r, c] = 1 + td[r-1, c];
                }
                else
                {
                    lr[r, c] = 0;
                    td[r, c] = 0;

                    // transforms sequences like 1,2,3,4 to 1,2,2,1 at place
                    for(var rc = c; lr[r, rc] < lr[r, rc-1]; rc--)
                        lr[r, rc-1] = lr[r, rc] + 1;

                    for(var rr = r; td[rr, c] < td[rr-1, c]; rr--)
                        td[rr-1, c] = td[rr, c] + 1;
                }
            }
        }

        var max = 0;
        var bound = n - 1; // adjastable bound depends on max

        for(var r = 1; r < bound; r++)
            for(var c = max; c < bound; c++)
            {
                var rank = Math.Min(lr[r, c], td[r, c]);

                if(rank > max)
                {
                    max = rank;
                    bound = n - 1 - max;
                }
            }

        return max;    
    }
}
```