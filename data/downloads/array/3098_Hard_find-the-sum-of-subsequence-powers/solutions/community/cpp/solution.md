# 🐱‍🏍Simple DP || Concise Understandable Code || Beats 100%

**Author:** teqarine
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4947511/](https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4947511/)

---

# Intuition and Approach
- Simple take not take dp approach works for this problem.
- Variables:
    - ind: index we are at in nums
    - count: no of elements picked so far
    - diff: the minimum difference so far
    - last: the last index we picked

# Complexity
- Time complexity: O(n^5)

- Space complexity: O(n^5)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
#define ll long long

class Solution {
public:
    int mod=1e9+7;
    unordered_map<ll,unordered_map<ll,unordered_map<ll,unordered_map<ll,ll>>>> dp;
    ll helper(vector<int> &nums,int n,int k,int ind,int count,ll diff,ll last){
        if(count==k) return (diff%mod);
        if(ind==n) return 0;
        if(dp.count(ind) && dp[ind].count(count) && dp[ind][count].count(diff) && dp[ind][count][diff].count(last)) 
            return dp[ind][count][diff][last];
        
        ll new_diff= (last==-1) ? diff%mod : min(diff , abs(nums[ind]*1LL - nums[last]*1LL)%mod);
        ll take = helper(nums,n,k,ind+1,count+1,new_diff,ind);
        ll notTake = helper(nums,n,k,ind+1,count,diff,last);
        
        return dp[ind][count][diff][last] = (take%mod + notTake%mod)%mod;
    }
    
    int sumOfPowers(vector<int>& nums, int k) {
        int n=nums.size();
        //memset(dp,-1,sizeof(dp));
        sort(nums.begin(),nums.end());
        return helper(nums,n,k,0,0,LONG_MAX,-1);
    }
};
```
![upvote xd.jpeg](./images/0.jpeg)
