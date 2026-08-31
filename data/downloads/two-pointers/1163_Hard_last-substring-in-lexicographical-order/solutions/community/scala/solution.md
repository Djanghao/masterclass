# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/3701208/](https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/3701208/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: o(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def lastSubstring(s: String): String = {
      s.substring((s.length - 1 to 0 by -1).foldLeft(s.length - 1){(maxIdx, currIdx)=>
        if (s.charAt(currIdx) > s.charAt(maxIdx)) currIdx
        else if (s.charAt(currIdx) == s.charAt(maxIdx)) {
          var i = currIdx + 1
          var j = maxIdx + 1
          while (i < maxIdx && j < s.length && s.charAt(i) == s.charAt(j)) {
            i += 1
            j += 1
          }
          if (i == maxIdx || j == s.length || s.charAt(i) > s.charAt(j)) currIdx
          else maxIdx
        } else maxIdx
      })
    }
}
```