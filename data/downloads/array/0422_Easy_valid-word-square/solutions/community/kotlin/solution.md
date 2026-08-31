# Simple and with one pointer

**Author:** gabegg
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/4277607/](https://leetcode.com/problems/valid-word-square/solutions/4277607/)

---

# Complexity
- Time complexity: $$O(n * m)$$ 

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    fun validWordSquare(words: List<String>): Boolean {
        for (i in 0 until words.size) {
          if (words[i] != words.map{it.getOrNull(i) ?: ""}.joinToString("")) {
            return false
          }
        }
        return true
    }
}
```