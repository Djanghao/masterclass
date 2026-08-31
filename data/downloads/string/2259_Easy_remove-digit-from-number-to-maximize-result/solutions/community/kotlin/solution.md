# Kotlin 1 line solution

**Author:** kepler88d
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/2123484/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/2123484/)

---

```
fun removeDigit(number: String, digit: Char): String {
	return number.indices.filter { number[it] == digit.toChar() }.map { number.replaceRange(it, it + 1, "") }.max()!!
}
```