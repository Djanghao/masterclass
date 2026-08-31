# Very simple & easy to understand solution

**Author:** kreakEmp
**Votes:** 17
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/3520226/](https://leetcode.com/problems/sum-in-a-matrix/solutions/3520226/)

---

<b> Up vote if you like the solution </b>

# Approach
1. Sort the matrix on each row.
2. Then traverse the matrix column wise and keep adding the max value on each column to ans.

# Code
```
class Solution {
public:
    int matrixSum(vector<vector<int>>& nums) {
        int ans = 0;
        for(int i = 0; i < nums.size(); ++i){
            sort(nums[i].begin(), nums[i].end());
        }
        for(int c = 0; c < nums[0].size(); ++c){
            int t = 0;
            for(int r = 0; r <nums.size(); ++r){
                t = max(t, nums[r][c]);
            }
            ans += t;
        }
        return ans;
    }
};
```
<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted