# Solution using scala

**Author:** sitorushedrin
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solutions/4419826/](https://leetcode.com/problems/palindrome-partitioning-ii/solutions/4419826/)

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
object Solution {
  def minCut(s: String): Int = {
    if (s.isEmpty) return 0

    val n = s.length
    val isPalindrome = Array.ofDim[Boolean](n, n)

    // Helper function to check if a substring is a palindrome
    def isPalindromeHelper(start: Int, end: Int): Boolean = {
      var left = start
      var right = end
      while (left < right) {
        if (s(left) != s(right)) {
          return false
        }
        left += 1
        right -= 1
      }
      true
    }

    // Fill the isPalindrome table
    for {
      length <- 0 until n
      center <- 0 until n
    } {
      val start = center - length / 2
      val end = start + length
      if (start >= 0 && end < n) {
        isPalindrome(start)(end) = isPalindromeHelper(start, end)
      }
    }

    // Dynamic Programming to find minimum cuts
    val cuts = new Array[Int](n)
    for (end <- 0 until n) {
      var minCuts = end // Maximum cuts needed
      for (start <- 0 to end) {
        if (isPalindrome(start)(end)) {
          // If substring is palindrome, update minCuts
          minCuts = if (start == 0) 0 else math.min(minCuts, cuts(start - 1) + 1)
        }
      }
      cuts(end) = minCuts
    }

    cuts(n - 1)
  }

  def main(args: Array[String]): Unit = {
    // Example usage
    val result = minCut("cabababcbc")
    println(result) // Output: 3
  }
}

```