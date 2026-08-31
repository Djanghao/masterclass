# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/4898697/](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/4898697/)

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
    int minimumReplacement(List<int> nums) {
        var last = nums.last;
        var steps = 0;
        for (int i = nums.length - 2; i >= 0; i--) {
            final num = nums[i];
            final partitions = ((num - 1) ~/ last);
            last = (num ~/ (partitions + 1));
            steps += partitions;
        }

        return steps;
    }
}

```