# Track sum & len

**Author:** macrohard
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-consecutive-subarrays/solutions/5820314/](https://leetcode.com/problems/sum-of-consecutive-subarrays/solutions/5820314/)

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
```java []
class Solution {
    public int getSum(int[] nums) {
        int n = nums.length, mod = 1_000_000_007;
        long len = 0, sum = 0, res = 0;
        
        for(int i = 0; i < n; i++) {
            if(i > 0 && Math.abs(nums[i] - nums[i-1]) == 1) {
                len++;
                sum = (sum + len * nums[i]) % mod;
                res = (res + sum) % mod;

                if(i < n-1 && nums[i+1] - nums[i] == nums[i-1] - nums[i]) {
                    sum = nums[i];
                    len = 1;
                }
            } else {
                sum = nums[i];
                len = 1;
                res = (res + sum) % mod;
            }
        }
        return (int)res;
    }
}
```