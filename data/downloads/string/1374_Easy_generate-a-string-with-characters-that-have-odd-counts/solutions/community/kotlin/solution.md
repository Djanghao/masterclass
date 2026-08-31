# kotlin - minimalistic, no if

**Author:** tucux
**Votes:** 1
**Link:** [https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/1008038/](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/1008038/)

---

```
class Solution {
    fun generateTheString(n: Int): String {
        val p = n + n % 2 - 1
        return "p".repeat(p) + "q".repeat(n - p)
    }
}
```