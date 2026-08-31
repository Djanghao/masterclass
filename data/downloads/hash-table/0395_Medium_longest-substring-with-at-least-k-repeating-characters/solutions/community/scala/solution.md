# Scala recursive solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/3430224/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/3430224/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def longestSubstring(s: String, k: Int): Int = {
      def loop(start: Int, end: Int): Int = {
        if (end - start < k) 0
        else {
          val freq = Array.fill(26)(0)
          for (i <- start until end) freq(s(i) - 'a') += 1
          var i = start
          while (i < end && freq(s(i) - 'a') >= k) i += 1
          if (i == end) end - start
          else {
            var j = i + 1
            while (j < end && freq(s(j) - 'a') < k) j += 1
            math.max(loop(start, i), loop(j, end))
          }
        }
      }
      loop(0, s.length)
    }
}
```