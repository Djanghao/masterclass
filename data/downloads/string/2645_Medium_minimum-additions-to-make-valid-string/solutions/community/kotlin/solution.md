# Kotlin one pass solution

**Author:** lopestbl
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/5758024/](https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/5758024/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun addMinimum(word: String): Int {
        val template = "abc"

        var moves = 0

        var t = 0
        var i = 0

        while (i < word.length) {
            if (template[t] != word[i]) {
                moves++
                t++
            } else {
                i++
                t++
            }

            if (t >= template.length) {
                t = 0
            }
        }

        if (t != 0) {
            moves += template.length - t
        }

        return moves
    }
}

```