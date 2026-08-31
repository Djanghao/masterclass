# Scala 2 liner!

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/group-shifted-strings/solutions/5239046/](https://leetcode.com/problems/group-shifted-strings/solutions/5239046/)

---

# Intuition
Simply group by `s => s.sliding(2).map(t => (t(0) - t(1)) mod 26)`

# Code
```
object Solution {
    def groupStrings(strings: Array[String]) = strings.toList
        .groupBy(s => if s.length <= 1 then Nil else s.sliding(2).map(t => (26 + t(0) - t(1))%26).toList)
        .values.toList
}
```