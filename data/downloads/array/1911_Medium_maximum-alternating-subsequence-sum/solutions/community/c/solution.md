# Intitutive and Easy | Recursion + Memoization Solution | Detailed Explanation

**Author:** yajassardana
**Votes:** 117
**Link:** [https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/1298610/](https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/1298610/)

---

1. **Recursive Intuition**
	* At a each given index, we can either **choose this** element and call the next index with an opposite sign.
	* Or we can **not choose** this element and call the next index with the same sign as the one which was passed to current index.
	* The answer now will simply be the max of these returned two values.
	* We use **isPos** to signify isPositive sign, which, if false, will mean that sign is **negative.**  
2. **Adding Memoization**
	* We observe that in each function call, only two variables change: **isPos** & the index **i**.
	* Hence, as we're making choices at each step, which can end up leading to the same subproblem in further steps, we must optimize our approach by maintaining a **2-D** DP table of dimensions `2, (nums).size`, which at max, can be 10^5.
	* Thus, we now simply add memoization with the traditional `intial value = -1` approach.
```
class Solution {
public:
    long long dp[2][100001];
    long long util(int i, vector<int>&nums, bool isPos){
        if(i>=nums.size())return 0;
        if(dp[isPos][i]!=-1)return dp[isPos][i];
        long long curr = (isPos?nums[i]:-1*nums[i]);
        return dp[isPos][i] = max(curr + util(i+1, nums, !isPos), util(i+1, nums, isPos));
    }
    long long maxAlternatingSum(vector<int>& nums) {
        memset(dp, -1, sizeof(dp));
        return util(0, nums, true);
    }
};
```