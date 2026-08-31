# Simple Pick-Skip

**Author:** yadivyanshu
**Votes:** 27
**Link:** [https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3801819/](https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3801819/)

---


# Code
```

typedef long long ll;

class Solution {
public:
    ll memo[100005][2];
    
    ll fun(int ind, int isOdd, int x, vector<int>& nums) {
        if(ind == nums.size())return 0;
        if(memo[ind][isOdd] != -1)return memo[ind][isOdd];
        
        ll skip = fun(ind+1, isOdd, x, nums);
        ll pick = nums[ind] + fun(ind+1, (nums[ind]&1), x, nums);
        if((nums[ind]&1) != isOdd)pick -= x;
        return memo[ind][isOdd] = max(pick, skip);
    }
    
    long long maxScore(vector<int>& nums, int x) {
        memset(memo, -1, sizeof(memo));
        return nums[0] + fun(1, (nums[0] & 1), x, nums);
    }
};
```