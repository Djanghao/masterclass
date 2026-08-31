# Scala | Backtracking

**Author:** imran-sarwar
**Votes:** 0
**Link:** [https://leetcode.com/problems/generalized-abbreviation/solutions/987413/](https://leetcode.com/problems/generalized-abbreviation/solutions/987413/)

---

```
def generateAbbreviations(word: String): List[String] = {
	val ans = ListBuffer[String]()
	val count = word.length

	def backtrack(tmp: String, start: Int, abbrv: Int): Unit = {
		if(count == start) {
			// Append the last abbreviated count if not zero
			var result = tmp
			if(abbrv != 0) result = tmp + abbrv
			ans += result
		} else {
			// branch word(start) is abbreviated
			backtrack(tmp, start + 1, abbrv + 1)

			// branch word(start) kept the same
			val c = if(abbrv != 0) ""+abbrv else ""
			backtrack(tmp + c :+ word(start), start + 1, 0)
		}
	}

	backtrack("", 0, 0)
	ans.toList
}
```