# Kotlin

**Author:** GeorgCantor
**Votes:** 4
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/1538774/](https://leetcode.com/problems/two-out-of-three/solutions/1538774/)

---

```
fun twoOutOfThree(a: IntArray, b: IntArray, c: IntArray) = (a + b + c).toSet().filter {
    arrayOf(a, b, c).count { ar -> ar.contains(it) } > 1
}
```
*Or:*
```
fun twoOutOfThree(a: IntArray, b: IntArray, c: IntArray) = (a + b + c).toSet().filter {
    a.contains(it) && b.contains(it) || b.contains(it) && c.contains(it) || a.contains(it) && c.contains(it)
}
```