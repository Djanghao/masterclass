# Kotlin Sliding window O(n)

**Author:** ashabib
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/1664267/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/1664267/)

---

```

fun longestBeautifulSubstring(word: String): Int {
	// edge cases
    if (word.length < 5) {
        return 0
    }
    if (word.toList().distinct().size < 5) {
        return 0
    }
	
    val characters = word.toCharArray()
    var counter = 1
    var maxValue = 0
    var currentLength = 1
	
    for (index in 1 until characters.size) {
        when {
            characters[index - 1] == characters[index] -> currentLength++
            characters[index - 1] < characters[index] -> {
                currentLength++
                counter++
            }
            else -> {
                currentLength = 1
                counter = 1
            }
        }
        if (counter == 5) maxValue = max(maxValue, currentLength)
    }
    return maxValue
}
```