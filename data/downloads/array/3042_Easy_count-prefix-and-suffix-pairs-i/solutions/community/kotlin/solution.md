# Kotlin iterative and higher-order functions solutions

**Author:** csc156
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/5400300/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/5400300/)

---

```
fun countPrefixSuffixPairs(words: Array<String>): Int {
	var count = 0

	for (i in 0 until words.lastIndex) {
		val iWord = words[i]

		for (j in i + 1..words.lastIndex) {
			val jWord = words[j]

			if (jWord.startsWith(iWord) && jWord.endsWith(iWord)) {
				count++
			}
		}
	}

	return count
}
```

```
fun countPrefixSuffixPairs(words: Array<String>): Int =
	(0 until words.lastIndex)
	.sumOf { i ->
		val iWord = words[i]

		(i + 1..words.lastIndex)
		.count { j ->
			val jWord = words[j]
			jWord.startsWith(iWord) && jWord.endsWith(iWord)
		}
	}
```