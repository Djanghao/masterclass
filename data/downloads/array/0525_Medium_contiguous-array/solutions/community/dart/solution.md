# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/contiguous-array/solutions/4200752/](https://leetcode.com/problems/contiguous-array/solutions/4200752/)

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
  int findMaxLength(List<int> nums) {
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums[i] = -1;
        }
    }

    Map<int, int> m = {0: -1};
    var sum = 0;
    var maxLength = 0;

    for (int j = 0; j < nums.length; j++) {
        sum += nums[j];

        if (m.containsKey(sum)) {
            final curLength = j - m[sum]!;
            maxLength = max(curLength, maxLength);
        } else {
            m[sum] = j;
        }
    }

    return maxLength;

  }
}
```