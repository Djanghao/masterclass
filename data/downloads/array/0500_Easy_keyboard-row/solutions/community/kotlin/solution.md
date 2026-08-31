# Simple Kotlin solution for beginners

**Author:** ganesh2shiv
**Votes:** 3
**Link:** [https://leetcode.com/problems/keyboard-row/solutions/2928537/](https://leetcode.com/problems/keyboard-row/solutions/2928537/)

---

```
class Solution {
    fun findWords(words: Array<String>): Array<String> {
        val result = ArrayList<String>()
        val row1 = hashSetOf('q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p')
        val row2 = hashSetOf('a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l')
        val row3 = hashSetOf('z', 'x', 'c', 'v', 'b', 'n', 'm')

        for (word in words) {
            val set = word.toLowerCase().toSet()
            val size = set.size
            if (set.intersect(row1).size == size || set.intersect(row2).size == size 
                    || set.intersect(row3).size == size) {
                result.add(word)
            }
        }

        return result.toTypedArray()
    }
}
```