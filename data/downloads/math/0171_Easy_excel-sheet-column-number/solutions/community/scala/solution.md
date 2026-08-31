# Scala Beautiful Single Line Solution

**Author:** imran-sarwar
**Votes:** 2
**Link:** [https://leetcode.com/problems/excel-sheet-column-number/solutions/983809/](https://leetcode.com/problems/excel-sheet-column-number/solutions/983809/)

---

Simple, we are using base 26
Move from left to right and multiply each base with 26 and extract number of ch

```
def titleToNumber(s: String): Int = {
	s.foldLeft(0) {
		case (base, ch) => base * 26 + (ch - 'A' + 1)
	}
}
```