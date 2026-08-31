# [C++] DP with detailed explain

**Author:** alisha618g
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/solutions/5684188/](https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/solutions/5684188/)

---

# Intuition
> `:=` means `define`
```
// * Idea : dp
//   - iterate through the array, and for each element nums[i], 
//     find the smallest valid subarray from `nums[i~j]` 
//   - valid subarr nums[i~j] : = gcd(nums[i], nums[j] > 1)
```

# Approach
> `:=` means `define`, `i.e.` means `that is`

```
// * Def :
//   - dp[i] := min number of subarrays in valid splitting of nums[0:i]
// * Transition formula : 
//   - if nums[i~j] is a valid subarr : 
//     - if j == 0 : [0:i] is a valid subarr -> dp[i] = 1
//     - else : dp[i] = min(dp[i], dp[j-1] + [j~i] is a valid subarr)
//                    = min(dp[i], dp[j-1] + 1)
// * edge case : 
//   * if n == 1 and nums[0] == 1 : return -1
//   * if not possible to find a valid subarray : return -1
// * base case : dp[0] = 1, i.e. [nums[0]] is a valid subarr
```

# Complexity
```
// TC : O(n^2)
// SC : O(n)
```

# Code
```cpp []
class Solution {
public:
    int validSubarraySplit(vector<int>& nums) {

        int n = nums.size();
        vector<int> dp(n, 1e5+1); // nums[i] <= 1e5, if use INT_MAX will overflow

        if(n == 1 && nums[0] == 1) return -1; // edge case for nums = [1]

        dp[0] = 1; // base case : [nums[0]] is a valid subarr (nums[0] != 1)

        for(int i = 1 ; i < n ; i++){ // nums[i] is the last num of subarr
            for(int j = 0 ; j <= i ; j++){ // nums[j] is the first num of subarr
                if(__gcd(nums[j], nums[i]) > 1){ // [j~i] is a valid subarr
                    if(j == 0) dp[i] = 1; // [0:i] is valid, num of subarr is 1
                    else dp[i] = min(dp[i], dp[j-1] + 1); // dp[j-1] + a valid subarr [j~i] 
                }
            }
        }

        // if can't split into valid subarrays -> no update -> 1e5+1
        return dp[n-1] == 1e5+1 ? -1 : dp[n-1]; 
    }
};
```