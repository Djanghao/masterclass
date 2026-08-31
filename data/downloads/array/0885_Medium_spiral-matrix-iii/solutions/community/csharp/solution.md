# C#

**Author:** c_4less
**Votes:** 3
**Link:** [https://leetcode.com/problems/spiral-matrix-iii/solutions/2837586/](https://leetcode.com/problems/spiral-matrix-iii/solutions/2837586/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
public class Solution {
    public int[][] SpiralMatrixIII(int rows, int cols, int rStart, int cStart) {
        List<int[]> result = new();
       int[,] directions = new int[,]{{0,1} ,{1,0},{0,-1},{-1,0}};
        int len =0;
        int d =0;
        result.Add(new int[]{rStart, cStart});

        while(result.Count < rows * cols)
        {
            //directions right---> or left <---, increase len++
            if(d==0 || d==2)
            {
                len++;
            }
            for(int k=0; k<len; k++)
            {
                rStart += directions[d,0];
                cStart += directions[d,1];
                if(rStart < rows && rStart >=0 && cStart < cols && cStart >=0)
                {
                    result.Add(new int[]{rStart, cStart});
                }
            }
            d= (d+1) % 4;
        }
        return result.ToArray();
    }
}
```