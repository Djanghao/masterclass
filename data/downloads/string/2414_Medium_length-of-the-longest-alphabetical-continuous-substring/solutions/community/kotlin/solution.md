# Kotlin Lambda Solution

**Author:** kotlinc
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/3216900/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/3216900/)

---

# Intuition
We can pass the previous char and the length of the longest continuous substring ending with the previous char.

Then in the current char `ch` can decide if it can append to that substring to make it 1 char longer.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
      fun longestContinuousSubstring(s: String): Int {
    var res = 0
    s.fold(Pair('z', 0)) { prev, ch ->
      if (ch == prev.first + 1) {
        res = Math.max(res, prev.second + 1)
        Pair(ch, prev.second + 1)
      } else {
        res = Math.max(res, 1)
        Pair(ch, 1)
      }
    }
    return res
  }

}
```