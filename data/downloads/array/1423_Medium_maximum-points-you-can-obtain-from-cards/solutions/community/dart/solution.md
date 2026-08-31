# piece of cake....

**Author:** Ayyoob_k_a
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/4940199/](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/4940199/)

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
  int maxScore(List<int> cardPoints, int k) {
    int totalSum = cardPoints.reduce((a, b) => a + b);
    int n = cardPoints.length;

    // If k is equal to the length of cardPoints, return totalSum
    if (k == n) {
      return totalSum;
    }

    // Calculate the initial window sum of size n - k
    int windowSum = cardPoints.take(n - k).reduce((a, b) => a + b);
    int minWindowSum = windowSum;

    // Slide the window and update minWindowSum
    for (int i = n - k; i < n; i++) {
      windowSum += cardPoints[i] - cardPoints[i - (n - k)];
      minWindowSum = windowSum < minWindowSum ? windowSum : minWindowSum;
    }

    // Return the maximum score
    return totalSum - minWindowSum;
  }
}
```