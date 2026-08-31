# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4583901/](https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4583901/)

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
    int countNicePairs(List<int> nums) {
        const mod = 1000000007;
        final size = nums.length;
        var count = 0;
        Map<int, int> m = {};
        for (int i = 0; i < size; i++) {
            final val = nums[i];
            final reversedVal = reverse(nums[i]);
            final diff = val - reversedVal;
            if (!m.containsKey(diff)) {
                m[diff] = 1;
            } else {
                count = (count + m[diff]!);
                m[diff] = m[diff]! + 1;
            }
        }
        return count % mod;
    }

    int reverse(int cand) {
        final candToString = cand.toString();
        final reversedString = candToString.split('').reversed.join('');
        return int.parse(reversedString);
    }
}
```