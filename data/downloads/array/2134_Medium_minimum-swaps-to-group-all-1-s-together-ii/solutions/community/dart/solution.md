# Simple Dart Solution 🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solutions/5575266/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solutions/5575266/)

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
  int minSwaps(List<int> nums) {
    int total =0;
    for (int num in nums){
        total += num;
    }
    int n = nums.length;
    if(total ==0) return 0;

    List<int> extendedNums = List<int>.filled(n*2, 0);
    for (int i = 0; i < n; i++) {
      extendedNums[i] = nums[i];
      extendedNums[i + n] = nums[i];
    }

    // Initialize the sliding window
    int windowSum = 0;
    for (int i = 0; i < total; i++) {
      windowSum += extendedNums[i];
    }
    int maxOnes = windowSum;
    int swaps = total - maxOnes;

    for (int i = 1; i < n; i++) {
      // Update the number of 1's in the current window by sliding the window
      windowSum += extendedNums[i + total - 1] - extendedNums[i - 1];
      maxOnes = max(maxOnes, windowSum);
      swaps = min(swaps, total - maxOnes);
    }

    return swaps;
  }
}
```