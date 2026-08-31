# [Kotlin] Dynamic Programming Word Concatenation Finder

**Author:** teogor
**Votes:** 4
**Link:** [https://leetcode.com/problems/concatenated-words/solutions/5022096/](https://leetcode.com/problems/concatenated-words/solutions/5022096/)

---

# Intuition
To solve this problem, we can use dynamic programming. We iterate through each word in the input list and check if it can be formed by concatenating shorter words from the list.

# Approach
1. **Word Set Creation**: We start by creating a set called `wordSet` to store all the words in the input list. This set will allow us to efficiently check if a word exists in the list.

2. **Iterating Through Words**: We iterate through each word in the input list. For each word, we temporarily remove it from the `wordSet` to prevent self-concatenation.

3. **Dynamic Programming Check**: We use dynamic programming to check if the current word can be formed by concatenating shorter words from the `wordSet`. We initialize a dynamic programming array called `dp` with a length one more than the length of the current word. We set `dp[0] = true` to indicate that an empty string can be formed. Then, we iterate through each position in the word and check if the substring up to that position can be formed by concatenating shorter words. If we find a match, we set `dp[i] = true`.

4. **Result Construction**: After checking all positions in the word, if `dp[word.length]` is true, it means the entire word can be formed by concatenating shorter words. In this case, we add the word to the result list.

5. **Restore Word to Set**: Finally, we restore the word to the `wordSet` to maintain its presence for subsequent iterations.

# Complexity Analysis
- **Time complexity**: 
  - Creating the `wordSet` takes `O(n)` time, where `n` is the number of words.
  - Iterating through each word and performing dynamic programming check takes `O(n * l^2)` time, where `l` is the average length of words.
  - Overall, the time complexity is `O(n^2 * l^2)`.

- **Space complexity**: 
  - The word set `wordSet` requires `O(n)` space.
  - The dynamic programming array `dp` requires `O(l)` space.
  - Overall, the space complexity is `O(n + l)`.

# Code
```
class Solution {
    fun findAllConcatenatedWordsInADict(words: Array<String>): List<String> {
        val result = mutableListOf<String>()
        val wordSet = words.toHashSet()
        for (word in words) {
            wordSet.remove(word)
            if (canForm(word, wordSet)) {
                result.add(word)
            }
            wordSet.add(word)
        }
        return result
    }
    
    private fun canForm(word: String, wordSet: Set<String>): Boolean {
        if (word.isEmpty()) return false
        val dp = BooleanArray(word.length + 1)
        dp[0] = true
        for (i in 1..word.length) {
            for (j in 0 until i) {
                if (dp[j] && wordSet.contains(word.substring(j, i))) {
                    dp[i] = true
                    break
                }
            }
        }
        return dp[word.length]
    }
}

```