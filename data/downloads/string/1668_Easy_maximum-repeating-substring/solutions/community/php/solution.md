# Beats 94.98% in Python3 (simple dp)

**Author:** Angielf
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-repeating-substring/solutions/5312222/](https://leetcode.com/problems/maximum-repeating-substring/solutions/5312222/)

---

# Approach
The solution works by using dynamic programming to keep track of the maximum number of times a word can be repeated in a given sequence.

The idea is to iterate over the sequence starting from the length of the word and check if the substring of length m starting from index i is equal to the word. If it is equal, it means that the word can be repeated starting from that index, so we update `dp[i]` to be `dp[i - m] + 1`. This is because `dp[i - m]` represents the maximum number of times the word can be repeated before index i, and adding 1 represents the additional repetition starting from index i.

By doing this, we keep track of the maximum number of times the word can be repeated at each index in the sequence. Finally, we return the maximum value in the dp list, which represents the maximum number of times the word can be repeated in the entire sequence.

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the input sequence. This is because the function iterates over the sequence once, and the inner loop only runs if the substring is equal to the word, which happens at most once per iteration.

- Space complexity:
$$O(n)$$, as we use a list dp of length n+1 to keep track of the maximum number of times the word can be repeated at each index in the sequence.

# Code
``` python3 []
class Solution:
    def maxRepeating(self, sequence: str, word: str) -> int:
        n = len(sequence)
        m = len(word)
        dp = [0] * (n + 1)

        # Iterate over the sequence, starting from the word's length
        for i in range(m, n + 1):
            # Check if the substring of length m starting from index i is equal to the word
            if sequence[i-m:i] == word:
                dp[i] = dp[i - m] + 1

        # Return the maximum dp value, which represents the maximum number of times the word can be repeated
        return max(dp)

        
```
``` javascript []
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    const n = sequence.length;
    const m = word.length;
    const dp = Array(n + 1).fill(0);

    // Iterate over the sequence, starting from the word's length
    for (let i = m; i <= n; i++) {
        // Check if the substring of length m starting from index i is equal to the word
        if (sequence.substring(i - m, i) === word) {
            dp[i] = dp[i - m] + 1;
        }
    }

    // Return the maximum dp value, which represents the maximum number of times the word can be repeated
    return Math.max(...dp);
};
```
``` php []
class Solution {

    /**
     * @param String $sequence
     * @param String $word
     * @return Integer
     */
    function maxRepeating($sequence, $word) {
        $n = strlen($sequence);
        $m = strlen($word);
        $dp = array_fill(0, $n + 1, 0);

        // Iterate over the sequence, starting from the word's length
        for ($i = $m; $i <= $n; $i++) {
            // Check if the substring of length m starting from index i is equal to the word
            if (substr($sequence, $i - $m, $m) === $word) {
                $dp[$i] = $dp[$i - $m] + 1;
            }
        }

        // Return the maximum dp value, which represents the maximum number of times the word can be repeated
        return max($dp);
    }
}
```