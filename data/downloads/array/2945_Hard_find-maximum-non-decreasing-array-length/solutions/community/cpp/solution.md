# Video Explanation (Proof of every observation involved)

**Author:** codingmohan
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-maximum-non-decreasing-array-length/solutions/4332951/](https://leetcode.com/problems/find-maximum-non-decreasing-array-length/solutions/4332951/)

---

# Explanation

[Click here for the video](https://youtu.be/CFM9KnSLQm4)

# Code
```
#define pii pair<int, int>
#define F first
#define S second

typedef long long int ll;

class Solution {
public:
    int findMaximumLength(vector<int>& nums) {
        int n = nums.size();
        
        vector<ll> prefix(n+1, 0);
        for (int j = 1; j <= n; j ++) 
            prefix[j] = prefix[j-1] + nums[j-1];
        
        vector<pii> max_after(n+1, {1, 1});
        
        for (int i = 1; i <= n; i ++) {
            max_after[i] = max (max_after[i-1], max_after[i]);
            
            int cnt = max_after[i].F;
            int ind = max_after[i].S;
            
            ll last_sum = prefix[i] - prefix[ind-1];
            
            int first_valid_ind = lower_bound(prefix.begin(), prefix.end(), prefix[i]+last_sum) - prefix.begin();
            if (first_valid_ind > n) continue;
            
            max_after[first_valid_ind] = max(max_after[first_valid_ind], {cnt+1, i+1});            
        }
        
        return max_after[n].F;
    }
};
```