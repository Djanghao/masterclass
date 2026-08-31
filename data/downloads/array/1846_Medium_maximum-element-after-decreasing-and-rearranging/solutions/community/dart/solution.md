# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/5383877/](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/5383877/)

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
  int maximumElementAfterDecrementingAndRearranging(List<int> arr) {
    arr.sort();
    if (arr[0] != 1) {
        arr[0] = 1;
    }

    for (int i = 1; i < arr.length; i++) {
        final diff = (arr[i] - arr[i - 1]).abs().toInt();
        if (diff > 1) {
            arr[i] = arr[i - 1] + 1;
        }
    }

    return arr.reduce(max);
  }
}
```