# Kotlin Best Solution

**Author:** progp
**Votes:** 4
**Link:** [https://leetcode.com/problems/most-common-word/solutions/4385394/](https://leetcode.com/problems/most-common-word/solutions/4385394/)

---


# Code
```
class Solution {
    fun mostCommonWord(paragraph: String, banned: Array<String>): String {
        val para = paragraph.toLowerCase().replace(Regex("[!?',;.]"), " ")
        var (result, max) = Pair("", Int.MIN_VALUE)
        val map = HashMap<String, Int>()
        for (w in para.split(" ")) {
            if (!banned.contains(w) && w.trim().length != 0) {
                map.put(w, map.getOrDefault(w, 0) + 1)
                val freq = map.getOrDefault(w, 0)
                if (max < freq) {
                    max = freq
                    result = w
                }
            }
        }
        return result
    }
}
```