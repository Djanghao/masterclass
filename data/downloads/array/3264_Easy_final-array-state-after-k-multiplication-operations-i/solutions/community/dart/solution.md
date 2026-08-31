# Dart easy solution

**Author:** Caypoh23
**Votes:** 2
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5754534/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5754534/)

---

# Approach
1. Find the minimum element in the array and multiply it with the multiplier.
2. Repeat the above step k times.
3. Return the final state of the array.

# Complexity
- Time complexity: O(k * n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  List<int> getFinalState(List<int> nums, int k, int multiplier) {
    for (int i = 0; i < k; i++) {
      int minIndex = nums.indexOf(nums.reduce((a, b) => a > b ? b : a));
      nums[minIndex] *= multiplier;
    }
    return nums;
  }
}

```