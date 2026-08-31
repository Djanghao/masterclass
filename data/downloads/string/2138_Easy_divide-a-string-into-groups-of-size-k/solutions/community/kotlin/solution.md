# Kotlin pad and chunk one-line function

**Author:** user8783ez
**Votes:** 6
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/1694872/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/1694872/)

---

```
class Solution {
    fun divideString(s: String, k: Int, fill: Char) = s.chunked(k) {it.padEnd(k, fill).toString()}
}
```