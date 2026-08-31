# Map

**Author:** avuzi
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/4882827/](https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/4882827/)

---

# Code
```Kotlin []
class Solution {
    fun countWords(words1: Array<String>, words2: Array<String>): Int {
        val frequencies1 = words1.groupingBy { it }.eachCount()
        val frequencies2 = words2.groupingBy { it }.eachCount()
        return frequencies1.count { (key, value) ->
            val value2 = frequencies2[key]
            value == 1 && value == value2
        }
    }
}
```
```Kotlin []
class Solution {
    fun countWords(words1: Array<String>, words2: Array<String>): Int {
        val frequencies1 = words1.groupingBy { it }.eachCount()
        val frequencies2 = words2.groupingBy { it }.eachCount()
        val commonKeys = frequencies1.keys intersect frequencies2.keys
        return commonKeys.count { 
            frequencies1[it] == 1 && frequencies1[it] == frequencies2[it] 
        }
    }
}
```