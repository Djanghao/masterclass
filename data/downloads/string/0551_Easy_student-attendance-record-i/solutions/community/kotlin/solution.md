# Kotlin

**Author:** GeorgCantor
**Votes:** 2
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/1206818/](https://leetcode.com/problems/student-attendance-record-i/solutions/1206818/)

---

```
fun checkRecord(s: String) = !s.contains("LLL") && s.count { it == 'A' } < 2
```