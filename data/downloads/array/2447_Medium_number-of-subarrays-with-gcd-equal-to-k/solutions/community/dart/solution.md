# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/4362979/](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/4362979/)

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
  int subarrayGCD(List<int> nums, int k) {
    var c = 0;
    for (int i = 0; i < nums.length; i++) {
        var greatestCommonDivisor = nums[i];
        if (greatestCommonDivisor == k) {
            c += 1;
        }
        for (int j = i + 1; j < nums.length; j++) {
            greatestCommonDivisor = greatestCommonDivisor.gcd(nums[j]);
            if (greatestCommonDivisor == k) {
                c += 1;
            }
        }
    }

    return c;
  }
}
```