# Repeat the Pattern (Bottom Up DP Explained)

**Author:** ctlang
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-build-house-of-cards/solutions/3208845/](https://leetcode.com/problems/number-of-ways-to-build-house-of-cards/solutions/3208845/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
At state 0 cards, we can stack 2 cards /\\ to make a house. After that, every 3 cards represents the base of a new house. At the 5th card, we have the base for house 2 of /\\\\-/\\\\, and it looks just like state 0 to complete the house with /\\\\. Similarly at the 8th card we have a base of /\\\\-/\\\\-/\\\\ and can see a pattern emerging: at each new base, we can reuse the steps to build the previous house in order to complete this one. And if we use memoization to track which card configurations are valid as we build each house, we can solve the problem.

# Approach
<!-- Describe your approach to solving the problem. -->
Set the base case dp[0] to 1, indicating a valid house of cards. Let i = # of cards to build the base of a house of cards, let j = number of cards to build previous house, and let k = # of cards required to complete the house from the current base. Initialize k = 0, then for each i in [2, n] iterate the previous j in [0, k] steps, adding dp[j] to dp[i + j] to indicate valid configurations, and incrementing i += 3 and k += i.
Additionally:
- we must iterate from j = k down to j = 0 in order to avoid double counting as k grows large
- j should not exceed n - i to avoid unnecessary operations

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
class Solution {
public:
    int houseOfCards(int n) {
        int dp[501] = { 1 };

        for (int i = 2, k = 0; i <= n; k += i, i += 3)
            for (int j = min(k, n - i); j >= 0; --j)
                dp[i + j] += dp[j];

        return dp[n];
    }
};
```