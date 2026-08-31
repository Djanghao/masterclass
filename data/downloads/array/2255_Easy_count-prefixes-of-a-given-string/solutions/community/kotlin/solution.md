# Kotlin | 100% Beats

**Author:** DanisDeveloper
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/4643435/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/4643435/)

---


# Code
```
class Solution {
    fun countPrefixes(words: Array<String>, s: String): Int {
        return words.count{str -> s.startsWith(str)};
    }
}
```