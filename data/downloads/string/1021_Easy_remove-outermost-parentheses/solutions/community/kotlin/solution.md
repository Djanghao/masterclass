# Kotlin beats 100%

**Author:** mahmoud5airy2000
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-outermost-parentheses/solutions/4097212/](https://leetcode.com/problems/remove-outermost-parentheses/solutions/4097212/)

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
class Solution {
    
fun removeOuterParentheses(s: String): String {
    val string = StringBuilder()
    var count = 0
    for (i in s.indices ) {
        when (s[i]) {
            '(' -> {
                count++
                if (count > 1) string.append(s[i])
            }
            ')' -> {
                count--
                if (count >= 1) string.append(s[i])
            }
        }
    }
    return string.toString()
}


}
```