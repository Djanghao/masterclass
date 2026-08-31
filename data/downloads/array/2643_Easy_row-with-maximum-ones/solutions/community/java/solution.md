# Simple java solution

**Author:** Siddhant_1602
**Votes:** 19
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/3421712/](https://leetcode.com/problems/row-with-maximum-ones/solutions/3421712/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(m*n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int[] rowAndMaximumOnes(int[][] mat) {
        int max=0,index=0;
        for(int i=0;i<mat.length;i++)
        {
            int val=0;
            for(int j=0;j<mat[0].length;j++)
            {
                if(mat[i][j]==1)
                {
                    val++;
                }
            }
            if(val>max)
            {
                index=i;
                max=val;
            }
        }
        return new int[]{index,max};
    }
}
```