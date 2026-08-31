# Simple solution using map

**Author:** avuzi
**Votes:** 2
**Link:** [https://leetcode.com/problems/decode-the-message/solutions/4757330/](https://leetcode.com/problems/decode-the-message/solutions/4757330/)

---

```
class Solution {
    fun decodeMessage(key: String, message: String): String {
        val map = mutableMapOf(' ' to ' ')
        var currentAlphabetChar = 'a'
        for (char in key) {
            if (char !in map) {
                map[char] = currentAlphabetChar++
            }
        }
        return message.map { map[it]!! }.joinToString("")
    }
}

```