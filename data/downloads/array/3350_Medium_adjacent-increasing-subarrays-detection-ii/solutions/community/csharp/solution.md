# Two pointers

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/solutions/6117422/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/solutions/6117422/)

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
```csharp []
public class Solution {
    public int MaxIncreasingSubarrays(IList<int> nums) {
        int len = nums.Count, res = 1;
        int cnt = 1, preLen = -1;
        if(len < 2)
            return 0;

        for(int i = 1; i < len; i++)
        {
           if(nums[i] <= nums[i-1])
           {
                res = Math.Max(res, cnt/2);
                if(preLen > 0)
                {
                    int validTwo = Math.Min(preLen, cnt);
                    res = Math.Max(res, validTwo);
                }
              
                preLen = cnt;
                cnt = 1;
           }
           else
                cnt++;

            if(i == len-1)
            {
                res = Math.Max(res, cnt/2);
                if(preLen > 0)
                {
                    int validTwo = Math.Min(preLen, cnt);
                    res = Math.Max(res, validTwo);
                }
            }
        }

        return res;
    }
}
```