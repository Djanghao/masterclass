# (Recursion + Memoization) || Easy to Understand || Beats 100%

**Author:** deepak_4572
**Votes:** 63
**Link:** [https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4220580/](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4220580/)

---

# Intuition
From the problem statememt, we can conclude that if we make all subarray of size 3 beautiful, then all subarray of size greater than 3 will also be beautiful and ultimately our array becomes beautiful. So we have to think only about of size 3 subarray.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Any element can be a part of atmost 3 subarray because we have to think only about of size 3 subarray. So, we can conclude that we have only 3 options.
- Option 1 : Select first element of the subarray and go to the next subarray.
- Option 2 : Select second element of the subarray and go to the next subarray.
- Option 3 : Select third element of the subarray and go to the next subarray.
Now, we can iterate on the given array from 0 to n-3(because in a array of length n we have atmost n-2 subarray) and return minimum of all the three options.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int n; 
    vector<long long> dp;
    long long solve(int ind,vector<int>& nums, int k)
    {
        if(ind>n-3)
            return 0;
        if(dp[ind]!=-1)
            return dp[ind];
        //option 1
        long long op1 = max(0,k-nums[ind]) + solve(ind+1,nums,k);
        //option 2
        long long op2 = max(0,k-nums[ind+1]) + solve(ind+2,nums,k);
        //option 3
        long long op3 = max(0,k-nums[ind+2]) + solve(ind+3,nums,k);
        
        return dp[ind] = min(op1,min(op2,op3));
    }
    long long minIncrementOperations(vector<int>& nums, int k) {
        n = nums.size();
        dp.resize(n,-1);
        return solve(0,nums,k);
    }
};
```