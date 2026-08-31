# Concise Kotlin solution

**Author:** ShuffleZZZ
**Votes:** 6
**Link:** [https://leetcode.com/problems/word-pattern/solutions/2977184/](https://leetcode.com/problems/word-pattern/solutions/2977184/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

You basically have to check if chars from pattern match same words, different chars don't match the same words and they match all of them.

# Approach
<!-- Describe your approach to solving the problem. -->

First thing that comes to mind while talking about matching is a map. We will be using it to store the pairs. We will also parse the words straight at the start. Then simply store all new chars of pattern with matching word. If the char is already in the map, we check if it matches the previous word and return false if it isn't. To make sure all words are checked we compare the length of our pattern to the size of words array. Lastly, we check if all map's values are unique. Return false on any not satisfied condition and true in the end.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

$$O(n)$$, assuming we are using the hashmap

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

$$O(n)$$, as all of stored data is using linear space, wheather it is an array of words, a hashmap or lastly words set

# Code
```
class Solution {
    fun wordPattern(pattern: String, s: String): Boolean {
        val words = s.split(" ")
        if (words.size != pattern.length) return false

        val matchers = mutableMapOf<Char, String>()
        for (i in pattern.indices) {
            if (matchers.getOrPut(pattern[i]) { words[i] } != words[i]) return false
        }

        if (matchers.values.toSet().size != matchers.size) return false

        return true
    }
}
```