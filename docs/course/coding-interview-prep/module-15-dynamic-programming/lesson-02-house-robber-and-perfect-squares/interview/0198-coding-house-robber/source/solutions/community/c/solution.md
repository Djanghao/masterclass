# c++ | Discussing all solutions | DP with constant-space

**Author:** priyam_vd
**Votes:** 270
**Link:** [https://leetcode.com/problems/house-robber/solutions/1605133/](https://leetcode.com/problems/house-robber/solutions/1605133/)

---

This is a classic 1D-DP problem where at every step we have a choice to make ...
So the first and foremost thing in any DP problem is to find the reccurence relation !!
    At every ith house robber has 2 options: *a) rob current house i.* *b) don't rob current house.*
* In case he is robbing the (i)th house, the money he can get till the i-th house == money robbed till (i-2)th house + money robbed at (i)th house....let's say total money robbed in this case equals to X.
* In case he is not robbing, money robbed till i-th house==money robbed till (i-1)th house...lets say total money robbed in this case equals to Y.
* So , the maxm money he gets till i-th house is the max(X,Y).

Example of case (a) --> nums={2,3,2} ... Here, the robber will rob the house at index-2 as nums[index-2] + nums[index-0] > nums[index-1]
Example of case (b)--> nums={2,7,3} ... here maximum money robbed till index-2 will not be equal to nums[index-2] + nums[index-0]... as nums[index-1] is greater than the sum of money at both those houses ...

*We can achieve the desired solution to this problem via mutliple ways, let's start with the simpler ones and then will look forward to optimize the **Time and Space Complexities***


1. **Simple Recursion**

* Time  Complexcity  :  O ( 2^n )   Gives us TLE
* Space Complexcity : O( 1 )
```
class Solution {
public:
    int rec(vector<int>& nums,int idx){
        if(idx>=nums.size())return 0;
        return max(nums[idx]+rec(nums,idx+2),rec(nums,idx+1));
    }
    int rob(vector<int>& nums) {
        return rec(nums,0);
    }
};
```


2. **Memoization**

* Time  Complexcity  :  O (n)
* Space Complexcity : O(n)
    
 ```   
class Solution {
public:
   int rec(vector<int>& nums,int idx,vector<int>&dp){
        if(idx >= nums.size()) return 0;
        if(dp[idx] != -1) return dp[idx];
        return dp[idx] = max(rec(nums, idx+1, dp), nums[idx] + rec(nums, idx+2, dp));
   }
   int rob(vector<int>& nums) {
       vector<int>dp(nums.size()+1,-1);
       return rec(nums,0,dp);
   }
};
```


3. **Dynamic Programming**

* Time Complexity : O(n)
* Space Complexity : O(n)    
```
class Solution {
public:
    int rob(vector<int>& nums) {
        if(nums.size()==1)return nums[0];
        vector<int>dp(nums.size());
        dp[0]=nums[0];
        dp[1]=max(nums[0],nums[1]);
        for(int i=2;i<nums.size();i++){
            dp[i]=max(dp[i-1],dp[i-2]+nums[i]);
        }
        return dp[nums.size()-1];
    }
};
```

4.**Dynamic Programming**  (improved version)
 
* Time Complexity : O(n)
* Space complexity : O(1)

We can optimize the space now,
as we can see we only need to know the answer till (i-1)th idx and (i-2)th idx to have an answer for the (i)th idx. And we don't really care about the whole dp-vector, so there is no point maintaining one... 3 variables will do the job, prev_ans (for i-1), prev_ans2(for i-2) and curr_ans !!

* dp[i - 2] - previous answer(till i-2 idx) -> prev_ans2
* dp[i - 1] - previous answer(till i-1 idx) -> prev_ans
* dp[i] - current answer(can be prev_ans or prev_ans2+nums[i]) -> curr_ans
So we will get rid of the dp-vector and thus our SC will get reduced down to O(1)
(It is very similar to fibonacci series Space optimization)
```
class Solution {
public:
    int rob(vector<int>& nums) {
        int n = nums.size();
        if(n == 1) return nums[0];
        
        int prev_ans2=nums[0], prev_ans=max(nums[0],nums[1]),curr_ans=prev_ans;
        
        for(int i = 2; i < n; i++){
            curr_ans = max(prev_ans, prev_ans2 + nums[i]);
            prev_ans2 = prev_ans;
            prev_ans = curr_ans;
        }
        return curr_ans;
    }
};    
```
Well, Thanks for reading it out !!