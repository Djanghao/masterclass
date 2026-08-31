# Scala O(n) knuth-morris-pratt

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4937280/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4937280/)

---

# Intuition
This problem is analogous to looking for substrings in a string.
There are many algorithms out there to do this efficiently. In this case, where the pattern length can be very long, kmp seems a good choice.

# Approach
1. build the lookup table to fallback in case of pattern match failures
2. iterate through the nums array

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
object Solution {
  def countMatchingSubarrays(nums: Array[Int], pattern: Array[Int]): Int = {
    val n = nums.length
    val pn = pattern.length
    val lps = lpsOf(pattern)
    var result = 0
    var i = 0
    var j = 0
    while (i < n - 1) {
      val diff = (if (nums(i + 1) < nums(i)) -1 else if (nums(i + 1) == nums(i)) 0 else 1)
      if (pattern(j) == diff) {
        i += 1
        j += 1
        if (j == pn) {
          result += 1
          j = lps(j - 1)
        }
      } else {
        if (j != 0) j = lps(j - 1)
        else i += 1
      }
    }
    result
  }

  private def lpsOf(pattern: Array[Int]): Array[Int] = {
    val n = pattern.length
    val result = Array.ofDim[Int](n)
    var j = 0
    (1 until n).foreach { i =>
      while (j > 0 && pattern(i) != pattern(j)) j = result(j - 1)
      if (pattern(i) == pattern(j)) j += 1
      result(i) = j
    }
    result
  }
}
```