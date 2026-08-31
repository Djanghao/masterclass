# [Dart] Sorting

**Author:** aospiridonov
**Votes:** 1
**Link:** [https://leetcode.com/problems/put-marbles-in-bags/solutions/3734816/](https://leetcode.com/problems/put-marbles-in-bags/solutions/3734816/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach: Sorting
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n\\cdot\\log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int putMarbles(List<int> weights, int k) {
    int n = weights.length;
    final pairWeights = List<int>.filled(n - 1, 0);
    for (int i = 0; i < n - 1; i++) {
      pairWeights[i] = weights[i] + weights[i + 1];
    }
    pairWeights.sort();
    int result = 0;
    for (int i = 0; i < k - 1; i++) {
      result += pairWeights[n - 2 - i] - pairWeights[i];
    }
    return result;
  }
}
```