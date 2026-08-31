# using Map

**Author:** sana_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-harmonious-subsequence/solutions/6044288/](https://leetcode.com/problems/longest-harmonious-subsequence/solutions/6044288/)

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
```dart []
class Solution {
  int findLHS(List<int> nums) {
   Map<int, int> frequency = {};
  for (int num in nums) {
    frequency[num] = (frequency[num] ?? 0) + 1;
  }
  int maxLength = 0;
  for (int num in frequency.keys) {
    if (frequency.containsKey(num + 1)) {
      maxLength = max(maxLength, frequency[num]! + frequency[num + 1]!);
    }
  }
  return maxLength;
}
}
```