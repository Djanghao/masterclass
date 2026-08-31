# simple and easy understand solution

**Author:** shishirRsiam
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/4985424/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/4985424/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F


# Code
```
class Solution {
public:
    int findLengthOfLCIS(vector<int>& nums) 
    {
        int mx = 1, cur = 1, n = nums.size();
        for(int i=1;i<n;i++)
        {
            if(nums[i] > nums[i-1]) cur++;
            else 
            {
                mx = max(mx, cur);
                cur = 1;
            }
        }
        return max(mx, cur);
    }
};
```