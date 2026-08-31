# Declarative Approach Kotlin

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/5364572/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/5364572/)

---

# Code
```
class Solution {
  fun findLucky(arr: IntArray): Int = arr.toList()
    .groupingBy{ it }.eachCount()
    .entries
    .filter{ it.key == it.value }
    .map{ it.key }
    .maxOrNull()
    ?: -1
}
```