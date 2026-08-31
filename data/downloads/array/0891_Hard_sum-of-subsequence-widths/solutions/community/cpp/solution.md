# Calculate contribution of each element

**Author:** dhoni_0069
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-subsequence-widths/solutions/3963373/](https://leetcode.com/problems/sum-of-subsequence-widths/solutions/3963373/)

---

# Intuition
Since the contraints are very strict to try and go for brute force approach, we try to solve this question by calculating contribution of each element

# Approach
Sort the array firstly. Then at each index we have to calculate in how many subsequence will the current element be maximum and minimum.
1) Maximum case
   All the subsequences ending at current index will have the maximum  element as nums[i]. 2*i subsequences
2) Minimum case
All the subsequences starting at current index will have minimum element as nums[i]. 2*(n-i-1) subsequences

# Complexity
- Time complexity:
O(NlogN)

- Space complexity:
O(1)

# Code
```
class Solution {
    #define ll long long
    int mod = 1e9+7;
    int power(ll x, ll y) {
        int res = 1;  
        x = x % mod; 
        if (x == 0) return 0;
    
        while (y > 0) {
            if (y & 1)
                res = (res*x) % mod;
    
            y = y>>1; 
            x = (x*x) % mod;
        }
        return res;
    }
public:
    int sumSubseqWidths(vector<int>& nums) {
        ll ans = 0, n = nums.size();
        sort(nums.begin(),nums.end());
        for(int i = 0 ; i<n ; ++i) {
            ans = (ans + nums[i]*1ll*power(2,i))%mod;
            ans = (ans - nums[i]*1ll*power(2,n-i-1))%mod;
        }
        return ans;
    }
};
```