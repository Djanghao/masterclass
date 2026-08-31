# Kotlin BFS

**Author:** jakobakoba
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-invalid-parentheses/solutions/4899142/](https://leetcode.com/problems/remove-invalid-parentheses/solutions/4899142/)

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
    fun removeInvalidParentheses(s: String): List<String> {
        val result = mutableSetOf<String>()
        val queue = mutableListOf(s)
        val visited = mutableSetOf<String>()
        
        while (queue.isNotEmpty()) {
            val curr = queue.removeFirst()
            if (result.isNotEmpty() && result.first().length > curr.length) {
                break
            }
                        
            if (isValid(curr)) {
                result.add(curr)
            } else {
                val toRemove = charToRemove(curr)
                for (i in curr.indices) {
                    if (curr[i] == toRemove) {
                        val next = curr.substring(0, i) + curr.substring(i + 1)
                        if (!visited.contains(next)) {
                            queue.add(next)
                            visited.add(next)
                        }
                    }
                }
            }
        }
        
        return result.toList()
    }

    private fun isValid(s: String): Boolean {
        var l = 0
        for (char in s) {
            when (char) {
                '(' -> l++
                ')' -> l--
            }
            if (l < 0) {
                return false
            }
        }
        return l == 0
    }
    
    private fun charToRemove(s: String): Char {
        var l = 0
        var r = 0
        for (char in s) {
            when (char) {
                '(' -> l++
                ')' -> r++
            }
        }
        return if (l > r) '(' else ')'
    }
}

```