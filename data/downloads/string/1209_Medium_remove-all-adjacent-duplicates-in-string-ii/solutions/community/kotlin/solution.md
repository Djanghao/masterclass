# Kotlin: Stack

**Author:** artemasoyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/4288199/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/4288199/)

---

```
class Solution {
    fun removeDuplicates(s: String, k: Int): String {
        val stack = Stack<LetterToCount>()
        
        s.forEach { c ->
            val count = if (stack.isNotEmpty() && stack.peek().letter == c) stack.peek().count + 1 else 1
            stack += LetterToCount(c, count)
            if (stack.peek().count == k) repeat (k) { stack.pop() }
        }
        return stack.map { it.letter }.joinToString("")
    }

    class LetterToCount(val letter: Char, var count: Int)
}

```