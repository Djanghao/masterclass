# Got %100 with DP with some optimizations

**Author:** niyodilxwes
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5854634/](https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5854634/)

---

# Intuition
The problem requires constructing a target string using words from a list, each with an associated cost, while minimizing the total cost. My first thought was to approach this as a dynamic programming problem where we keep track of the minimum cost to form each prefix of the target string.

# Approach
1. **Map Words to Minimum Costs**: First, we create a mapping of each word to its minimum associated cost from the input. This ensures we use the cheapest option for each word.

2. **Dynamic Programming (DP) Array**: We create a DP array where `dp[i]` represents the minimum cost to construct the prefix of the target string up to index `i`. We initialize `dp[0]` to `0`, as there is no cost to start from the beginning of the target string.

3. **Filling the DP Array**:
   - For each position `i` in the target string, if we can reach this position (i.e., `dp[i]` is not `Int.MaxValue`), we check all possible words.
   - For each word, if it matches a substring of the target starting at position `i`, we update the DP array for the position `i + word.length` to reflect the minimum cost of using that word.

4. **Final Result**: After processing the entire target string, the value at `dp[target.length]` gives the minimum cost to construct the entire target string. If it is still `Int.MaxValue`, it means the target cannot be constructed with the given words.

# Complexity
- Time complexity:
  The time complexity is $$O(n \\cdot m \\cdot l)$$ where:
   - `n` is the length of the target string,
   - `m` is the number of words in the `words` array,
   - `l` is the maximum length of any word. This is because for each position in the target, we may check all words and verify if they match the substring starting from that position.

- Space complexity:
  The space complexity is $$O(n)$$ due to the DP array that stores the minimum cost for constructing each prefix of the target string.

# Code
```scala []
import scala.collection.mutable

object Solution {
    def minimumCost(target: String, words: Array[String], costs: Array[Int]): Int = {
        // Create a map with the minimum cost for each word
        val wordToCost = mutable.Map[String, Int]()
        for (i <- words.indices) {
            val word = words(i)
            val cost = costs(i)
            if (!wordToCost.contains(word) || cost < wordToCost(word)) {
                wordToCost(word) = cost
            }
        }

        // Get the maximum word length in the words array to limit substring checks
        val maxWordLength = words.map(_.length).max

        // Create a dp array to store minimum costs up to each position
        val dp = Array.fill(target.length + 1)(Int.MaxValue)
        dp(0) = 0  // Cost to reach the beginning of the string is 0

        // Iterate through each character in the target string
        for (i <- target.indices) {
            if (dp(i) != Int.MaxValue) {  // Only proceed if position i is reachable
                // Check for words that match the current position in the target string
                for (word <- wordToCost.keys) {
                    val wordLen = word.length
                    // Avoid generating substrings by using startsWith
                    if (i + wordLen <= target.length && target.startsWith(word, i)) {
                        dp(i + wordLen) = Math.min(dp(i + wordLen), dp(i) + wordToCost(word))
                    }
                }
            }
        }

        // If we can't reach the end of the target, return -1, otherwise return dp(target.length)
        if (dp(target.length) == Int.MaxValue) -1 else dp(target.length)
    }
}

```