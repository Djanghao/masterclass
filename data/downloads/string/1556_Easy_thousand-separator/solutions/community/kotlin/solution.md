# Kotlin Readable Solution

**Author:** Entyl
**Votes:** 1
**Link:** [https://leetcode.com/problems/thousand-separator/solutions/997371/](https://leetcode.com/problems/thousand-separator/solutions/997371/)

---

```
class Solution {
    fun thousandSeparator(n: Int) = n.toString().reversed().chunked(3).joinToString(".").reversed()
}
```