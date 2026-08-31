# Simple java solution

**Author:** Siddhant_1602
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4671687/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4671687/)

---

# Complexity
- Time complexity: $$O(n^3)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int numberOfPairs(int[][] points) {
        int maxi = 0;
        for(int i=0;i<points.length;i++)
        {
            for(int j=0;j<points.length;j++)
            {
                if(i==j || points[i][0]>points[j][0] || points[i][1]<points[j][1])
                {
                    continue;
                }
                int k = 0;
                for(;k<points.length;k++)
                {
                    if(k==i || k==j)
                    {
                        continue;
                    }
                    if(points[k][1] <= points[i][1] && points[k][1] >= points[j][1] && points[k][0] <= points[j][0] && points[k][0] >= points[i][0]) {
                        break;
                    }
                }
                if(k==points.length)
                {
                    maxi++;
                }
            }
        }
        return maxi;
    }
}


```