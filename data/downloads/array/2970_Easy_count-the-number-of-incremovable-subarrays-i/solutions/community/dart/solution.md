# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/4995740/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/4995740/)

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
    int incremovableSubarrayCount(List<int> nums) {
        var count = 0;
        final numsCopy = List.from(nums);
        for (int i = 0; i < numsCopy.length; i++) {
            for (int j = i; j < numsCopy.length; j++) {
                final sub = nums.sublist(i, j + 1);
                nums.removeRange(i, j + 1);
                if (isIncreasing(nums)) {
                    count++;
                }

                nums = List.from(numsCopy);
            }
        }

        return count;
    }

    bool isIncreasing(List<int> cand) {
        var isIncreasing = true;
        for (int i = 0; i < cand.length - 1; i++) {
            if (cand[i] < cand[i + 1]) {
                continue;
            } else {
                isIncreasing = false;
                break;
            }
        }

        return isIncreasing;
    }
}
```