# use pointers to record even, odd, wave items' number

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5493441/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5493441/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
public class Solution {
    public int MaximumLength(int[] nums) {
        int len = nums.Length, res = 0, even = 0, odd = 0, wave = 1, next = (nums[0])%2;
        if(len <= 2)
            return len;

        for(int i = 0; i < len; i++)
        {
            int mod = nums[i] % 2;
            if(mod == 0)
                even++;
            else
                odd++;
            if(mod != next)
            {
                wave++;
                next = mod;
            }
        }
        return Math.Max(even, Math.Max(odd, wave));
    }
}
```