# Bit mask kotlin solution

**Author:** mihaillinkov
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/5101511/](https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/5101511/)

---

Idea here is to mask every string to be represented as an integer. 
Then we just need to group these numbers and calculate the answer.
```
class Solution {
    fun similarPairs(words: Array<String>): Int {
        return words.map(String::mask)
            .groupingBy { it }
            .eachCount()
            .values
            .map { (it) * (it - 1) / 2 }
            .sum()
    }
}

fun String.mask() = toList()
    .distinct()
    .map { 1 shl (it - 'a') }
    .sum()
```