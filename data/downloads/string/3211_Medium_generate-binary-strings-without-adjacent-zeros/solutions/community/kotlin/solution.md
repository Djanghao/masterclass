# Easy Kotlin

**Author:** qveex
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/6078863/](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/6078863/)

---

# Code
```kotlin []
fun validStrings(n: Int): List<String> = (0 until 2f.pow(n).toInt())
    .map { it.toString(2).padStart(n, '0') }
    .filter { "00" !in it }
```