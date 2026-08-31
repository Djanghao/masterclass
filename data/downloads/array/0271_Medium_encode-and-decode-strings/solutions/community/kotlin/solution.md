# Kotlin | Fun Emoji Solution

**Author:** null925
**Votes:** 2
**Link:** [https://leetcode.com/problems/encode-and-decode-strings/solutions/1985000/](https://leetcode.com/problems/encode-and-decode-strings/solutions/1985000/)

---

I probably wouldn't do this during an interview but it works on here
```
class Codec {
    fun encode(strs: List<String>) = strs.joinToString("\uD83D\uDC36")   
    fun decode(s: String) = s.split("\uD83D\uDC36")
}