# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/5164748/](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/5164748/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def maximumLengthSubstring(s: String): Int = {
      def findMax(i: Int, arr: Array[Int], currentMaxLen: Int): Int =
        if (i == s.length) currentMaxLen
        else {
          val updatedArr = arr.clone()          
          var j = i
          while (j < s.length && { updatedArr(s.charAt(j) - 'a') += 1; updatedArr(s.charAt(j) - 'a') < 3 }) j += 1
          findMax(i + 1, arr, math.max(currentMaxLen, j - i))
        }

      (0 until s.length).foldLeft(0)((acc, i) => math.max(acc, findMax(i, Array.ofDim[Int](26), 0)))
    }
}
```