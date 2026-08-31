# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-or/solutions/4844472/](https://leetcode.com/problems/maximum-or/solutions/4844472/)

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
    int maximumOr(List<int> nums, int k) {
        final size = nums.length;

        final List<int> prefixOr = List.filled(size, 0);
        final List<int> suffixOr = List.filled(size, 0);

        for (int i = 1; i < size; i++) {
            prefixOr[i] = prefixOr[i - 1] | nums[i - 1];
        }

        for (int i = size - 2; i >= 0; i--) {
            suffixOr[i] = suffixOr[i + 1] | nums[i + 1];
        }

        var maxi = 0;
        for (int i = 0; i < size; i++) {
            nums[i] <<= k;
            maxi = max(maxi, prefixOr[i] | nums[i] | suffixOr[i]);
        }

        return maxi;
    }
}

```