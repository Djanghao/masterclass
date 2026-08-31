# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/5187327/](https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/5187327/)

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
  int maxSum(List<int> nums, int m, int k) {
    Map<int, int> h = {};
    int maximum = 0;
    int sumn = 0;
    for (int i = 0; i < k; i++) {
      h[nums[i]] = (h[nums[i]] ?? 0) + 1;
      sumn += nums[i];
    }

    if (h.keys.length >= m) {
      maximum = max(maximum, sumn);
    }

    for (int i = k; i < nums.length; i++) {
      sumn += nums[i];
      sumn -= nums[i - k];
      h[nums[i]] = (h[nums[i]] ?? 0) + 1;
      h[nums[i - k]] = (h[nums[i - k]] ?? 0) - 1;
      if (h[nums[i - k]] == 0) {
        h.remove(nums[i - k]);
      }

      if (h.keys.length >= m) {
        maximum = max(maximum, sumn);
      }
    }

    return maximum;
  }
}


```