# .::kotlin 4-lines

**Author:** dzmtr
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-game/solutions/5290856/](https://leetcode.com/problems/flip-game/solutions/5290856/)

---

```
class Solution {
    fun generatePossibleNextMoves(s: String): List<String> = buildList {
        for (i in 0 ..< s.lastIndex) {
            if (s[i] == '+' && s[i] == s[i+1]) {
                add("${s.substring(0, i)}--${s.substring(i + 2)}")
            }
        }
    }
}
```