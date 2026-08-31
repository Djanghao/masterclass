# Kotlin 1 line

**Author:** GeorgCantor
**Votes:** 0
**Link:** [https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4987770/](https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4987770/)

---

```
fun numberOfPoints(l: List<List<Int>>) = l.flatMap { it[0]..it[1] }.toSet().size
```