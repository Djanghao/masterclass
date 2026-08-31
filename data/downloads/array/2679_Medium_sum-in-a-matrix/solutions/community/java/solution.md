# Java | Simple | Easy to understand

**Author:** vidhiguptaa
**Votes:** 7
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/3520279/](https://leetcode.com/problems/sum-in-a-matrix/solutions/3520279/)

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
class Solution {
    public int matrixSum(int[][] nums) {
            int ans=0;
        for(int []row:nums)
        {
                Arrays.sort(row);
        }
            for(int i=0;i<nums[0].length;i++)
            {
                    int m=0;
                    for(int j=0;j<nums.length;j++)
                    {
                            if(m<nums[j][i])
                                    m=nums[j][i];
                    }
                    ans+=m;
            }
            return ans;
    }
}
```