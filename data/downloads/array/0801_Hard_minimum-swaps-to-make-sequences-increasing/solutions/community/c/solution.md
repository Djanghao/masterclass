# ✅✅Faster || Easy To Understand || C++ Code

**Author:** __KR_SHANU_IITG
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/2235686/](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/2235686/)

---

* ***Approach 1 :- Using Recursion && Memoization***

* ***Time Complexity :- O(N)***

* ***Space Complexity :- O(N)***

```
class Solution {
public:
    
    int dp[100005][2];
    
    int dfs(vector<int>& nums1, vector<int>& nums2, int i, int n, int prev1, int prev2, bool swap)
    {
        if(i == n)
            return 0;
        
        // if already calculated
        
        if(dp[i][swap] != -1)
            return dp[i][swap];
        
        int ans = INT_MAX;
        
        // no swaps have been made
        
        if(nums1[i] > prev1 && nums2[i] > prev2)
        {
            ans = min(ans, dfs(nums1, nums2, i + 1, n, nums1[i], nums2[i], false));
        }
        
        // swaps have been made
        
        if(nums1[i] > prev2 && nums2[i] > prev1)
        {
            ans = min(ans, 1 + dfs(nums1, nums2, i + 1, n, nums2[i], nums1[i], true));
        }
        
        // store in dp
        
        return dp[i][swap] = ans;
    }
    
    int minSwap(vector<int>& nums1, vector<int>& nums2) {
        
        int n = nums1.size();
        
        memset(dp, -1, sizeof(dp));
        
        return dfs(nums1, nums2, 0, n, -1, -1, false);
    }
};
```