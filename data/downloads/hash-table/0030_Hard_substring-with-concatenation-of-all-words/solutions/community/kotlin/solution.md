# Kotlin Sliding Window

**Author:** jschnall
**Votes:** 4
**Link:** [https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/3729164/](https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/3729164/)

---

# Intuition
Seems like a sliding window problem, shifting one word out at a time, and another in. Although the problem description mentions words are all the same length, it doesn't say whether they're unique, so a set won't be sufficient. Order doesn't matter though, so a frequency map should work.

# Approach
Sliding Window, word.length times in order to account for each possible offset.

# Complexity
- Time complexity:
$$O(n * k)$$ Looping over the n chars in s, wordLen times to cover each possible starting offset. WordLen is limited to 30 though, so this is basically 30 * n, which is just $$O(n)$$.

- Space complexity:
$$O(n + m)$$ Overhead is words.size for the usedMap, plus potentially in the worst case the result list being built could be equal to the length of s. If you don't consider the resulting data in the complexity, then just $$O(n)$$

# Code
```
class Solution {
    fun findSubstring(s: String, words: Array<String>): List<Int> {
        val wordLen = words[0].length
        val subStrLen = words.size * wordLen

        val result = mutableListOf<Int>()
        val wordCounts = words.groupingBy { it }.eachCount()
        
        // For efficiency slide over by wordLength at a time, so a full word can be removed and added
        // This needs to be repeated with the start offset by each index of wordLen
        for (i in 0 until wordLen) {
            val used = mutableMapOf<String, Int>()
            var start = i
            var end = i + subStrLen

            if (end > s.length) break

            // Fill used with the first words.size words
            s.substring(start, end).chunked(wordLen).forEach { word ->
                used[word] = used.getOrElse(word) { 0 } + 1
            }

            if (used == wordCounts) {
                result.add(start)
            }

            while (end <= s.length - wordLen) {
                // Remove old word
                val oldWord = s.substring(start, start + wordLen)
                
                if (used[oldWord]!! > 1) {
                    used[oldWord] = used[oldWord]!! - 1
                } else {
                    used.remove(oldWord)                    
                }

                // Add new word
                val newWord = s.substring(end, end + wordLen)

                used[newWord] = used.getOrElse(newWord) { 0 } + 1

                start += wordLen
                end += wordLen

                if (used == wordCounts) {
                    result.add(start)
                }
            }
        }

        return result
    }
}
```