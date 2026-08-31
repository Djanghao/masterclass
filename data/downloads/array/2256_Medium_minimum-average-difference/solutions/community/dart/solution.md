# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-average-difference/solutions/4388026/](https://leetcode.com/problems/minimum-average-difference/solutions/4388026/)

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
    int minimumAverageDifference(List<int> nums) {
        var ans = 1000000;
        var indexAns = 0;
        final pre = prefixSum(nums);
        final total = pre.last;
        final size = pre.length;
        for (int i = 0; i < size; i++) {
            final prefixValue = pre[i];
            final averageDiff = calculateAverageDifference(i, prefixValue, total, size);
            if (averageDiff < ans) {
                ans = averageDiff;
                indexAns = i;
            }  
        }

        return indexAns;
    }

    List<int> prefixSum(List<int> nums) {
        final prefix = List.filled(nums.length, 0);
        prefix.first = nums.first;
        for (int i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] + nums[i];
        }

        return prefix;
    }

    int calculateAverageDifference(int index, int prefixValue, int total, int size) {
        final first = (prefixValue / (index + 1)).floor();
        final second = (size - index - 1) == 0 ? 0 : ((total - prefixValue) / (size - index - 1)).floor();
        final difference = first - second;
        return difference.abs();
    }
}
```