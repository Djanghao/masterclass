# ✅✅✅ C++ | DP using Recursion & Memorization | Very Simple & Easy to Understand Solution

**Author:** kreakEmp
**Votes:** 100
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/2390532/](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/2390532/)

---

<b>Up Vote if you like the solution</b>

# Intuition: 
As there are rules and same element can be a part of multiple rules => its a optimization problem and that's how i think about to implement dp.

Three cases :
1. check for 2 consicutive are equal 
2. check for 3 consicutive are equal
3. check for 3 increasing numbers

Recursively call for above conditions and use memorisation fo faster execution
```
class Solution {
public:
    bool solve(vector<int>& nums, int i, vector<int>& dp){
        if(i == nums.size()) return true;
        if(dp[i] != -1) return dp[i];
        
        if(i + 1 < nums.size() && nums[i] == nums[i+1] ) {
            if(solve(nums, i + 2, dp)) return true;
            if(i + 2 < nums.size() && nums[i] == nums[i+2]){
                if(solve(nums, i + 3, dp)) return true;
            }
        }
        if(i + 2 < nums.size() && nums[i] == nums[i+1]-1 && nums[i] == nums[i+2] - 2 ){
            if(solve(nums, i + 3, dp)) return true;
        }
        return dp[i] = false;
    }
    bool validPartition(vector<int>& nums) {
         vector<int> dp(nums.size(), -1);
        return solve(nums, 0, dp);
    }
};
```
---

<b>Here is an article of my interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---