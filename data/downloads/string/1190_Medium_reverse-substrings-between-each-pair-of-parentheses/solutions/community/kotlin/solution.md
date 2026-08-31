# Very easy solution with explanation

**Author:** abhineshchandra1234
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5460140/](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5460140/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- we are given an string s, consisting of lowercase letters and brackets
- we need to reverse sub-strings between brackets, and return it
- we need to start operations from the innermost bracket

# Approach
<!-- Describe your approach to solving the problem. -->
- As evident in the question we need to solve it using StringBuilder and Stack
- But how to solve it using Stack
- we need to add all chars to StringBuilder eventually
- we will store index of open parenthesis in Stack
- when we encounter close parenthesis, we will pop top no of stack which will represent start of a sub-string
- for reverse start will be Stack top and end will be curr size of StringBuilder, reverse just this part and leave rest
- Finally return StrinBuilder as a res by converting it to a string

# Complexity
- Time complexity: `O(n^2)`, in worst case we need to reverse the whole string many times
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n)`, for stack
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun reverseParentheses(s: String): String {

        var stack = ArrayDeque<Int>()
        var sb = StringBuilder()
        var i = 0

        for (char in s) {
            when (char) {
                '(' -> stack.addLast(sb.length)
                ')' -> {
                    val start = stack.removeLast()
                    reverse(sb, start, sb.length - 1)
                }
                else -> {
                    sb.append(char)
                }
            }
        }
        return sb.toString()
    }

    private fun reverse(sb: StringBuilder, start: Int, end: Int) {
        var s = start
        var e = end
        while (s < e) {
            val temp = sb[e]
            sb.setCharAt(e--, sb[s])
            sb.setCharAt(s++, temp)
        }
    }
}

```