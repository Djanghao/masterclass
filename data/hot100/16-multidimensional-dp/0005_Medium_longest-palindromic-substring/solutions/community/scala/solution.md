# Scala immutable solution with recursion

**Author:** dustin10
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-palindromic-substring/solutions/334425/](https://leetcode.com/problems/longest-palindromic-substring/solutions/334425/)

---

I was able to solve the problem without looking at hints / other peoples solutions so it is possible that this isn't optimal here.

```
  /**
    * With these longest / maximum type substring / subarray problems they can generally be solved with the following
    * 1. Stack
    * 2. Queue
    * 3. Left and Right pointers.
    *
    * We are going to use right and left pointers for this solution. The first part of the algorithm will fix left pointer
    * and shrink the right pointer Once a string is a palindrome (which can happen when it is a single character)
    * move the pointer left and reset right. Continue until left plus the current solution is greater than the length of the string
    */
  object Solution {
    def longestPalindrome(s: String): String = {
      def longestPalindrome(left: Int, right: Int, result: String): String = {
        if (left + result.length >= s.length) {
          result
        } else if (result.length >= right - left + 1 || isPalindrome(left, right)) {
          longestPalindrome(left + 1, s.length - 1, if (result.length >= right - left + 1) result else s.substring(left, right + 1))
        } else {
          longestPalindrome(left, right - 1, result)
        }
      }

      def isPalindrome(left: Int, right: Int): Boolean = {
        if (left >= right) true
        else if (s(left) != s(right)) false
        else isPalindrome(left + 1, right - 1)
      }

      if (s.isEmpty) ""
      else longestPalindrome(0, s.length - 1, s.substring(0, 1))
    }
  }
```