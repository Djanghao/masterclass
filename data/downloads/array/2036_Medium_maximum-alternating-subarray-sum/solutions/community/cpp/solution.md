# [C++]

**Author:** b06902111
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/3395459/](https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/3395459/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    long long maximumAlternatingSubarraySum(vector<int>& nums) {
        long long sum = 0, ans = INT_MIN;
        // even idx is even
        for( int i = 0 ; i < nums.size() ; i += 2 ){
            sum += nums[i];
            ans = max(ans, sum);

            if( i+1 < nums.size() )
                sum -= nums[i+1];

            ans = max(ans, sum);
            sum = max(sum, (long long) 0);
        }

        // odd idx is even
        sum = 0;
        for( int i = 1 ; i < nums.size() ; i += 2 ){
            sum += nums[i];
            ans = max(ans, sum);

            if( i+1 < nums.size() )
                sum -= nums[i+1];

            ans = max(ans, sum);
            sum = max(sum, (long long) 0);
        }

        return ans;
    }
};
```