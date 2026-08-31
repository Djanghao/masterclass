# .::Kotlin::. BooleanArray

**Author:** dzmtr
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-bold-tag-in-string/solutions/4519730/](https://leetcode.com/problems/add-bold-tag-in-string/solutions/4519730/)

---


```
class Solution {
    fun addBoldTag(s: String, words: Array<String>): String = buildString {
        val bold = BooleanArray(s.length)
        for (i in s.indices) 
            for (word in words) 
                if (s.startsWith(word, i)) for (k in i..i + word.lastIndex) bold[k] = true

        for(i in s.indices) {
            if (bold[i] && !bold.getOrElse(i-1, { false })) append("<b>") // is start
            append(s[i])
            if (bold[i] && !bold.getOrElse(i+1, { false })) append("</b>") // is end
        }
    }
}
```