# Backtracking solution

**Author:** drgavrikov
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-pattern-ii/solutions/5221852/](https://leetcode.com/problems/word-pattern-ii/solutions/5221852/)

---

# Approach

The problem is solved using backtracking with saving the mapping for each letter of the pattern.

We move through the string and the pattern from left to right, keeping two indices: $stringIndex$ for the string and $patternIndex$ for the pattern. We also maintain a hashmap $char$ -> $string$ for the patterns of already visited letters.

If a pattern already exists for the current character of the string, we try to apply it to the string and recursively go deeper for the state $patternIndex + 1$ for next letter and the shift to the right in the input string. For example, if we are at the $i$-position in the string and have a mapped pattern $p$, we check that $s[i..i + len(p) - 1]$ is equal to $p$ and then recursively go to position $i + len(p)$ in string $s$..

If there is no pattern for the current character of the string yet, we iterate over the candidates for the pattern of different lengths from 1 to the length of the remaining characters and recursively go deeper for them. Before this, we do an additional check to avoid the same patterns for different letters.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(P + S)$ where $P$ is length of input pattern and $S$ is length of input string
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun wordPatternMatch(pattern: String, s: String): Boolean {

        val mapping = mutableMapOf<Char, String>()

        fun isMatch(patternIndex: Int = 0, strIndex: Int = 0): Boolean {
            if (patternIndex == pattern.length) return strIndex == s.length
            val currentChar = pattern[patternIndex]

            return if (currentChar in mapping) {
                val mappedString = mapping.getValue(currentChar)
                if (s.startsWith(mappedString, strIndex))
                    isMatch(patternIndex + 1, strIndex + mappedString.length)
                else false
            } else {
                val newMapping = StringBuilder()
                (strIndex until s.length).any { index ->
                    newMapping.append(s[index])
                    val candidate = newMapping.toString()
                    if (candidate !in mapping.values) {
                        mapping[currentChar] = candidate
                        val matchFound = isMatch(patternIndex + 1, index + 1)
                        mapping.remove(currentChar)
                        matchFound
                    } else false
                }
            }
        }

        return isMatch()
    }

    private fun String.startsWith(prefix: String, startIndex: Int): Boolean {
        if (startIndex + prefix.length > this.length) return false
        return prefix.indices.all { index -> this[startIndex + index] == prefix[index] }
    }
}
```

Most of my solutions are in [C++](https://github.com/drgavrikov/leetcode-cpp) and [Kotlin](https://github.com/drgavrikov/leetcode-jvm) on my [Github](https://github.com/drgavrikov).