# Simple Kotlin |  Stack | Beats 100% 116ms

**Author:** Mahoraga_JJK
**Votes:** 0
**Link:** [https://leetcode.com/problems/score-of-parentheses/solutions/4380247/](https://leetcode.com/problems/score-of-parentheses/solutions/4380247/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    fun scoreOfParentheses(s: String): Int {
        val st = LinkedList<Int>()
        var score = 0
        s.forEach { it->
            if (it==')') {
                score = st.removeLast() + (if (score!=0) 2*score else 1)
            } 
            else {
                st.addLast(score)
                score = 0
            }
        }
        return score
    }
}
```