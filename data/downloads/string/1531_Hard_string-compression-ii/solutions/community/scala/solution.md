# Scala solution

**Author:** Wizzy-wooz
**Votes:** 1
**Link:** [https://leetcode.com/problems/string-compression-ii/solutions/4472222/](https://leetcode.com/problems/string-compression-ii/solutions/4472222/)

---

# Intuition
Here are my initial thoughts on how to approach this problem:

Dynamic Programming (DP): The use of a 2D DP array (dp) suggests that a dynamic programming approach is being employed.

State Definition: The state dp(i)(j) likely represents the minimum length of the compressed string for the first i characters of s with j deletions allowed.

Transition Function: The nested loops seem to be iterating through all possible combinations of positions in the string and the allowed deletions. The transition function updates the DP array based on the current character and its relationship with previous characters.

Counting Consecutive Characters: The getLen function suggests that the length of consecutive characters is important for compression. The longer the consecutive characters, the shorter the compressed form.

Deletions and Adjustments: The algorithm considers the impact of deletions on the compressed length and tries to find the optimal combination of characters to delete.

Boundary Conditions: The initialization of dp(0)(0) to 0 suggests a base case for an empty string with no deletions.

To solve this problem, the algorithm likely iterates through the characters of the input string, updating the DP array based on the current character and the optimal solution for the subproblem formed by the previous characters.

# Complexity
- Time complexity:
O(n^3 * k)

- Space complexity:
O(n * k), where:

O(n) is the space required for the rows of the dp array.
O(k) is the space required for the columns of the dp array.

# Code
```
object Solution {
  def getLengthOfOptimalCompression(s: String, k: Int): Int = {
    val n = s.length
    val dp = Array.fill(n + 1, k + 1)(9999)

    dp(0)(0) = 0

    def getLen(len: Int): Int = len match {
      case 1 => 0
      case x if x < 10 => 1
      case x if x < 100 => 2
      case _ => 3
    }

    for {
      i <- 1 to n
      j <- 0 to k
    } {
      var count = 0
      var del = 0

      for (l <- i to 1 by -1) {
        count += Option.when(s(l - 1) == s(i - 1))(1).getOrElse(0)
        del += Option.when(s(l - 1) != s(i - 1))(1).getOrElse(0)

        if (j - del >= 0) {
          dp(i)(j) = math.min(dp(i)(j), dp(l - 1)(j - del) + getLen(count) + 1)
        }
      }

      if (j > 0) {
        dp(i)(j) = math.min(dp(i)(j), dp(i - 1)(j - 1))
      }
    }

    dp(n)(k)
  }
}

```