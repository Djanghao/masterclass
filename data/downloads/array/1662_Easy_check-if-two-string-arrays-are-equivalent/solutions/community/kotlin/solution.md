# Kotlin solution

**Author:** nothingelsematters
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/4348257/](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/4348257/)

---

# Complexity

- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code

```
class Solution {
    fun arrayStringsAreEqual(word1: Array<String>, word2: Array<String>): Boolean {
        val a = word1.asSequence().flatMap { it.asSequence() }.iterator()
        val b = word2.asSequence().flatMap { it.asSequence() }.iterator()
        
        while (a.hasNext() && b.hasNext()) {
            if (a.next() != b.next()) return false
        }
        
        return !a.hasNext() && !b.hasNext()
    }
}
```