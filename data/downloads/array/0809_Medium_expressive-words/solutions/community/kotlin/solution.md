# 2 Kotlin solutions: string compression and 2 pointers

**Author:** csc156
**Votes:** 0
**Link:** [https://leetcode.com/problems/expressive-words/solutions/5582681/](https://leetcode.com/problems/expressive-words/solutions/5582681/)

---

##### String Compression Solution

In the ["String Compression" problem](https://leetcode.com/problems/string-compression/), you iterate through a char array and find the number of times that each char appears in a row. This solution does that for the param strings and stores the results in lists of `CharGroup`s.

Runtime: 211 ms
Memory usage: 38.7 MB

```
class CharGroup(val char: Char, val numInARow: Int)

fun expressiveWords(s: String, words: Array<String>): Int {
	val sCharGroups = s.getCharGroups()

	return words.count { word ->
		val wordCharGroups = word.getCharGroups()

		sCharGroups.size == wordCharGroups.size &&
		(sCharGroups zip wordCharGroups)
		.all { (sCharGroup, wordCharGroup) ->                    
			sCharGroup.char == wordCharGroup.char &&
			sCharGroup.numInARow >= wordCharGroup.numInARow &&
			(sCharGroup.numInARow >= 3 || sCharGroup.numInARow == wordCharGroup.numInARow)
		}
	}
}

// Spoiler alert: the code below is similar to the code I used for the "String Compression" problem.

fun String.getCharGroups(): List<CharGroup> {
	val groups = ArrayList<CharGroup>()

	// This is the char we're keeping track of.
	var trackedChar = this.first()

	var numTrackedCharInARow = 0

	fun addGroup() {
		groups.add(CharGroup(trackedChar, numTrackedCharInARow))
	}

	for (char in this) {
		if (char == trackedChar) {
			numTrackedCharInARow++
		} else {
			addGroup()
			trackedChar = char
			numTrackedCharInARow = 1
		}
	}

	addGroup()
	return groups
}
```

##### 2 Pointers Solution

Runtime: 163 ms
Memory usage: 36.3 MB

```
fun expressiveWords(s: String, words: Array<String>): Int =
	words.count { isStretchy(it, s) }

fun isStretchy(word: String, s: String): Boolean {
	var wordIndex = 0
	var sIndex = 0

	while (true) {
		val char = word[wordIndex]
		if (s[sIndex] != char) return false

		var wordNumCharInARow = 1
		while (word.getOrNull(++wordIndex) == char) {
			++wordNumCharInARow
		}

		var sNumCharInARow = 1
		while (s.getOrNull(++sIndex) == char) {
			++sNumCharInARow
		}

		when {
			wordNumCharInARow > sNumCharInARow -> return false

			sNumCharInARow < 3 && sNumCharInARow != wordNumCharInARow -> return false

			wordIndex == word.length -> return sIndex == s.length

			sIndex == s.length -> return false
		}
	}
}
```