# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-maximum-of-array/solutions/4469190/](https://leetcode.com/problems/minimize-maximum-of-array/solutions/4469190/)

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
  int minimizeArrayValue(List<int> nums) {
    final prefixNums = prefixSum(nums);
    var maxi = 0;
    for (int i = 0; i < prefixNums.length; i++) {
        final avg = (prefixNums[i] / (i + 1)).ceil();
        maxi = max(maxi, avg);
    }

    return maxi;
  }

  List<int> prefixSum(List<int> nums) {
    final List<int> prefixSum = List.filled(nums.length, 0);
    prefixSum[0] = nums[0];
    for (int i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
    }

    return prefixSum;
  }
}
```