# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/5437630/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/5437630/)

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
  int minimumSum(List<int> nums) {
    List<int> prefixMin = List.filled(nums.length, 0);
    List<int> suffixMin = List.filled(nums.length, 0);

    prefixMin[0] = nums[0];
    suffixMin[suffixMin.length - 1] = nums[nums.length - 1];

    for (int i = 1; i < nums.length; i++) {
        prefixMin[i] = min(prefixMin[i - 1], nums[i]);
    }

    for (int i = nums.length - 2; i >= 0; i--) {
        suffixMin[i] = min(suffixMin[i + 1], nums[i]);
    }

    int minimumSum = 1000000000;
    for (int j = 1; j < nums.length - 1; j++) {
        int leftMin = prefixMin[j - 1];
        int rightMin = suffixMin[j + 1];
        if (nums[j] > leftMin && nums[j] > rightMin) {
            minimumSum = min(minimumSum, leftMin + nums[j] + rightMin);
        }
    }

    return minimumSum == 1000000000 ? -1 : minimumSum;
  }
}
```