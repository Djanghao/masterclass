# Kotlin

**Author:** GeorgCantor
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5317886/](https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5317886/)

---

```
fun occurrencesOfElement(a: IntArray, q: IntArray, x: Int) = hashMapOf<Int, MutableList<Int>>().run {
    a.forEachIndexed { i, n -> this[n] = getOrPut(n) { mutableListOf() }.apply { add(i) } }
    q.map { getOrDefault(x, mutableListOf()).getOrElse(it - 1) { -1 } }.toIntArray()
}
```