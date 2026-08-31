# Kotlin code with 100%

**Author:** 3336360dhdh
**Votes:** 2
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/1166388/](https://leetcode.com/problems/truncate-sentence/solutions/1166388/)

---

```
fun truncateSentence(s: String, k: Int): String {
    var c = 0
    for (i in s.indices) {
        if (s[i] == ' ') {
            c++
            if (c == k)  return s.substring(0,i)
        }
    }
    return s
}
```