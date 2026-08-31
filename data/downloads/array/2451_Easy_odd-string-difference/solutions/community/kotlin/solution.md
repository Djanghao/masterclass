# Simple Kotlin solution

**Author:** army_g
**Votes:** 1
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/5205829/](https://leetcode.com/problems/odd-string-difference/solutions/5205829/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun oddString(words: Array<String>): String {
        val key = toKey(words[0])
        var i = 1
        while(key == toKey(words[i])) {
            i++
        }
        return if (i>1) {
            words[i]
        } else {
            if (toKey(words[i+1]) == key) words[i] else words[0]
        }
         
    }

    fun toKey(w: String):String {
        val sh = w[0].toInt() - 'a'.toInt()
        val sb = StringBuilder()
        for (i in 0 until w.length) {
            sb.append((w[i].toInt()-sh).toChar())
        }
        return sb.toString()
    }
}
```