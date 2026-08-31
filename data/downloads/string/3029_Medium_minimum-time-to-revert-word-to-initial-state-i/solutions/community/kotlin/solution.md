# Kotlin O(n) Step by step examples

**Author:** kevin151580
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4711611/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4711611/)

---

# Intuition
1. Each time, remove k characters from the start of the string.
And add arbitrary k characters to the end of the string.
2. Focus on the start characters left from the original string, and forget characters you need to add to the end of the string, because you can add anything to the end to match with the original string.
3. The solution is to find the longest substring which match with the start of the original string with the index starting from k and add k each time.

# Approach
"?" represents characters added to the end

Example 1:
word = "abacaba", k = 3
Round 1: caba??? -> caba != abac(First 4 characters of the original string)
Round 2: a?????? -> a == a(First character of the original string)
Answer: 2 times

Example 2:
word = "abcbabcd", k = 2
Round 1: cbabcd?? -> cbabcd != abcbab(First 6 characters of the original string)
Round 2: abcd???? -> abcd != abcb(First 4 characters of the original string)
Round 3: cd?????? -> cd != ab(First 2 characters of the original string)
Round 4: ???????? -> Add one time to the counter and that's the answer, because the whole string has been replaced.
Answer: 4 times

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
class Solution {
    fun minimumTimeToInitialState(word: String, k: Int): Int {
        var counter = 0
        for (i in k..word.lastIndex step k) {
            counter++
            val remainingString = word.substring(i)
            if (remainingString == word.take(remainingString.length)) {
                return counter
            }
        }
        return ++counter
    }
}
```