# Kotlin solution

**Author:** nothingelsematters
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4266606/](https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4266606/)

---

# Complexity

- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
const val MODULO = 1_000_000_007

class Solution {
    fun countHomogenous(s: String): Int {
        var lastChar: Char? = null
        var lastIndex = 0

        return s.asSequence().withIndex().fold(0) { result, (index, c) ->
            if (lastChar != c) {
                lastChar = c
                lastIndex = index
            }
            (result + index - lastIndex + 1) % MODULO
        }
    }
}
```