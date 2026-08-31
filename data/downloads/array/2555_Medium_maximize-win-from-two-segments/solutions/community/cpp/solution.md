# Sliding Window +DP O(n)

**Author:** Priyanshu_Chaudhary_
**Votes:** 41
**Link:** [https://leetcode.com/problems/maximize-win-from-two-segments/solutions/3141497/](https://leetcode.com/problems/maximize-win-from-two-segments/solutions/3141497/)

---

# Intuition
* what if we were allowed to choose only one segment(sliding window)
* what if i save the last  segment with maximum prizes that I can attain from 0<=j<=i(dynamic programming)

# Approach
<!-- Describe your approach to solving the problem. -->
* if I am currently at ith position, the maximum prizes I can attain 
**i-start+1** prizes such that **nums[i]-nums[start]<=k** using sliding window.
Note
(
    nums[i]-nums[start]<=k 
    takes care of the condition (The length of each segment must be k)
    .Even if my length is smaller than k then there is going to be overlapping which is allowed.
)

* so suppose I can attain **i-start+1** prizes from the ith position , I will try to find the maximum prizes that can be attained in the subarray 
from **0<=i< start**(
 which can be calculated by dp
that is **dp[i]=max(i-start+1,dp[i-1])**;

).
# Complexity
- Time complexity: amortised O(n)
- Space complexity: O(n) (size of array dp)
# Code
```
class Solution
{
public:
    int maximizeWin(vector<int> &nums, int k)
    {
        int n = nums.size(), start = 0, ans = 0;
        vector<int> dp(n);
        for (int i = 0; i < n; i++)
        {
            while (nums[i] - nums[start] > k)
                    start++;
            
            ans = max(ans, i - start + 1 + (start > 0 ? dp[start - 1] : 0));
            dp[i] = max((i > 0 ? dp[i - 1] : 0), i - start + 1);
        }
        return ans;
    }
};
```