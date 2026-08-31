# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/5069858/](https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/5069858/)

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
    int minOperationsToMakeMedianK(List<int> nums, int k) {
        nums.sort();
        final size = nums.length;
        
        if (size == 1) {
            return (k - nums[0]).abs();
        }

        var middle = size ~/ 2;
        var median = -1;
        if (size % 2 == 0) {
            median = nums[middle];
        } else {
            median = max(nums[middle], nums[middle - 1]);
        }

        var operations = 0;

        if (median == k) {
            return 0;
        } else if (k > median) {
            for (int i = middle; i < size; i++) {
                if (k > nums[i]) {
                    operations += (k - nums[i]).abs();
                }
            }
        } else if (k < median) {
            for (int i = 0; i < middle + 1; i++) {
                if (k < nums[i]) {
                    operations += (k - nums[i]).abs();
                }
            }
        }

        return operations;
    }
}
```