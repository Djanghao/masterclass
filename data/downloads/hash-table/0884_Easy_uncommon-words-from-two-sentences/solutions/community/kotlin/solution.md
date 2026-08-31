# By using Kotlin's syntactic sugar, easy understanding

**Author:** d1d
**Votes:** 3
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5796845/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5796845/)

---

# Intuition
The main idea is to treat both sentences as one collection of words and then identify the words that occur only once. By using a frequency count of each word, we can easily filter out the words that are unique.

# Approach
1. Splitting Strings
2. Grouping and Counting
3. Filtering
4. Converting to Array

# Complexity
- Time complexity:
O(n+m)

- Space complexity:
O(n+m)

# Code
```kotlin []
class Solution {
    fun uncommonFromSentences(s1: String, s2: String): Array<String> {
        return (s1.split(" ") + s2.split(" "))
        .groupingBy{it}
        .eachCount()
        .filter{ it.value < 2 }
        .keys
        .toTypedArray()
    }
}
```