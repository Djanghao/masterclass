# high-order functions

**Author:** teqwon
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-common-characters/solutions/5261220/](https://leetcode.com/problems/find-common-characters/solutions/5261220/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Finding the minimum frequency of each character that appears in each word

# Approach
<!-- Describe your approach to solving the problem. -->
`val freq`- creates a list of maps of the frequency of the characters in each word

`val common`- goes through the list and applies the interesect function on the adjacent words, intersect finds common values in both maps

`return`- we flatten the map based on the minimum character frequency, and then we append a list of the strings into a single list; `.mapNotNull` goes through the list of maps to find the smallest value and we initialize a list of `minCount` the append the characters to it

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(m * k)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(m * k)

# Code
```
class Solution {
    fun commonChars(words: Array<String>): List<String> {
        // we can track the frequency of all the characters in all the words
        // grab the minimum count that appears across the frequency in all words
        // append the character the value of the min count

        val freq = words.map { word ->
            word.groupingBy { it }.eachCount()
        }

        val common = freq
            .map { it.keys }
            .reduce { acc, set -> acc.intersect(set) }
        
        return common.flatMap { char ->
            val minCount = freq.mapNotNull { it[char] }.minOrNull() ?: 0
            List(minCount) { char.toString() }
        }
    }
}
```