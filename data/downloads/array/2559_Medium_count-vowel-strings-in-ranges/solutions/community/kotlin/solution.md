# Easy Solution with Prefix Sum

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/4949034/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/4949034/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use prefix sums to calculate the number of words in a list that begin with and end with vowels.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun vowelStrings(words: Array<String>, queries: Array<IntArray>): IntArray {
        val preSum = IntArray(words.size + 1)
        words.forEachIndexed{i, word-> 
        
            preSum[i + 1] = preSum[i]

            if(hasVowel( word)) preSum[i + 1]++
        }
        val res = IntArray(queries.size)

        queries.forEachIndexed{ i, q->
            res[i] = preSum[q[1] + 1] - preSum[q[0]]
        }

        return res
    }

    fun hasVowel(word: String) = listOf('a','e','i','o','u').contains(word[0]) && listOf('a','e','i','o','u').contains(word.last())

    
}
```