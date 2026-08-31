# O(1) with simple math

**Author:** AntonAverin
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-longest-new-string/solutions/4415443/](https://leetcode.com/problems/construct-the-longest-new-string/solutions/4415443/)

---

# Intuition
We can always use up all "AB" in the end of the string.
We can use as many "AA" as "BB" joining them together.
We can always end another "AA" after "AB" (in the end) or start with "BB" if there is an extra

# Approach
If we have equal AA and BB \u2013 use them all and fill the rest with AB
If it's not equal \u2013\xA0use what we can, then still all of "AB" and add one of either BB in the beginning or AA in the end.

# Complexity
- Time complexity: O(1)

- Space complexity: O(1)

# Code
```
class Solution {
    fun longestString(aa: Int, bb: Int, ab: Int): Int {
        if (aa == bb) return (aa+bb+ab) * 2
        return (min(aa, bb)*2+ab+1) * 2
    }
}
```