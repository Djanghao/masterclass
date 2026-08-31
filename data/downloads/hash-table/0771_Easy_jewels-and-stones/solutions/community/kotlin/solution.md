# Kotlin 1 line

**Author:** GeorgCantor
**Votes:** 3
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/1066705/](https://leetcode.com/problems/jewels-and-stones/solutions/1066705/)

---

```
fun numJewelsInStones(j: String, s: String) = s.count { j.contains(it) }
```