# Easy approach, just using Math, 3 line of Code

**Author:** ndmbka218
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/4026318/](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/4026318/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can choose 2 position for each pair in sequence, so the result is the total cases of each pair multiply by other pair. It's only the math.

# Approach
<!-- Describe your approach to solving the problem. -->
First we create an array to store of the total case in the case of `i-1` pairs.
Then we calculate total the number of case that we can choose 2 position if we have `2*i` position.
Then the result is the total case multiply to the previous result.

# Complexity
- Time complexity:$$O(n)$$

# Code
```
class Solution {
  int countOrders(int n) {
List<int> dp = List.generate(n, (_) => 0);
  dp[0] = 1;
  for (int i = 1; i < n; i++) {
    int totalPoint = 2 * (i + 1);
    int numberOfCase = totalPoint * (totalPoint - 1) ~/ 2;
    dp[i] = numberOfCase * dp[i - 1] % 1000000007;
  }

  return dp[n - 1];
  }
}
```