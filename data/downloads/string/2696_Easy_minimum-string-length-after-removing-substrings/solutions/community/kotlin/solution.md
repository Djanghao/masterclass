# Non-Stack solution  || O(n)

**Author:** Thiennk
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5882595/](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5882595/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun minLength(s: String): Int {
        val res = StringBuilder()
        for (char in s) {
            if (char != 'D' && char != 'B' || res.isEmpty()) {
                res.append(char)
            } else {
                if (char == 'D' && res.last() == 'C') {
                    res.setLength(res.length - 1) 
                } else if (char == 'B' && res.last() == 'A') {
                    res.setLength(res.length - 1)
                } else {
                    res.append(char)
                }
            }
        }
        return res.length
    }
}
```