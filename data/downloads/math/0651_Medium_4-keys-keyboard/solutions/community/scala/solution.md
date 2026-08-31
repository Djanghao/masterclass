# scala DP solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/4-keys-keyboard/solutions/4742345/](https://leetcode.com/problems/4-keys-keyboard/solutions/4742345/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
object Solution {
  /**
   * Finds the maximum number of 'A's that can be produced with N key presses.
   *
   * @param N The total number of key presses allowed.
   * @return The maximum number of 'A's that can be produced.
   */
  def maxA(N: Int): Int = {
    // Initialize a DP array to store the maximum number of 'A's for each number of key presses
    val dp = Array.ofDim[Int](N + 1)
    
    // Base case: for i < 7, the best option is to press 'A' i times
    for (i <- 1 to N) dp(i) = if (i < 7) i else math.max(dp(i - 4) * 3, dp(i - 5) * 4)
    
    // Return the maximum number of 'A's for N key presses
    dp(N)
  }
}

```