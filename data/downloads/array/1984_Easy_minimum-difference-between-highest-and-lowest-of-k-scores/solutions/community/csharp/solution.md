# mysol

**Author:** samhitha_peddireddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/4311528/](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/4311528/)

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
    public int MinimumDifference(int[] nums, int k) {
        if(nums.Length== 1 || k==1)
        return 0;
        int i=0;
        int j=1;
        int mindiff=1222344550;
        Array.Sort(nums);
        while(j<nums.Length)
        {
            if(j-i+1<k)
            j++;
            else
            {
                if((nums[j]-nums[i])<mindiff)
                {
                    mindiff= nums[j]-nums[i];
                }
                i++;
                j++;
            }

        }

        return mindiff;
    }
}
```