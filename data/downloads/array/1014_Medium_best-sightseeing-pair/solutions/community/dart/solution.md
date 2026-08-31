# Simple solution on Dart | O(N)

**Author:** _DREDD_
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solutions/5921905/](https://leetcode.com/problems/best-sightseeing-pair/solutions/5921905/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  int maxScoreSightseeingPair(List<int> values) {
    int ans = 0;
    int maxSum = values.first;

    for (int i = 1; i < values.length; i++) {
        ans = max(ans, maxSum + (values[i] - i));
        maxSum = max(maxSum, values[i] + i);
    }

    return ans;
  }
}
```