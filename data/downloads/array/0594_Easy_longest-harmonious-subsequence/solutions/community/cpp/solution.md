# Sliding Window, Beats 90% Sol✅✅

**Author:** Zenitsu02
**Votes:** 16
**Link:** [https://leetcode.com/problems/longest-harmonious-subsequence/solutions/3586641/](https://leetcode.com/problems/longest-harmonious-subsequence/solutions/3586641/)

---

# Complexity\r
- Time complexity: O(nlog n)\r
\r
- Space complexity: O(1)\r
\r
# Please Upvote If you liked the Solution\uD83E\uDD79\r
\r
# Code\r
```\r
class Solution {\r
public:\r
    int findLHS(vector<int>& nums) {\r
        sort(nums.begin(), nums.end());\r
        int i = 0;\r
        int left = 0;\r
        int right = 0;\r
        int ans = 0;\r
        int maxAns = 0;\r
\r
        while(right < nums.size()){\r
            if(nums[right]-nums[left] == 1){\r
                ans = right-left+1;\r
                maxAns = max(maxAns, ans);\r
            }else if(nums[right]-nums[left] > 1){\r
                while(nums[right]-nums[left] > 1){\r
                    left++;\r
                }\r
            }\r
            right++;\r
        }\r
\r
        return maxAns;\r
    }\r
};\r
```