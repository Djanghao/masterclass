# Kotlin One-Liner

**Author:** SMZ
**Votes:** 2
**Link:** [https://leetcode.com/problems/group-shifted-strings/solutions/1680805/](https://leetcode.com/problems/group-shifted-strings/solutions/1680805/)

---

```
class Solution {
    fun groupStrings(strings: Array<String>): List<List<String>> =
        strings.groupBy({s -> s.map { (26 + (it - 'a') - (s[0] - 'a')) % 26 }}).map { it.value }
}
```
Same idea as many of the other short solutions here, made beautiful by kotlin's brevity. Also avoids the overhead of any pair-like structures as well.