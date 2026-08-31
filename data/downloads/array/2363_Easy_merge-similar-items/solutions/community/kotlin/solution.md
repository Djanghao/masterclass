# Kotlin with map solution

**Author:** yeraeaa
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/2944922/](https://leetcode.com/problems/merge-similar-items/solutions/2944922/)

---

# Intuition
Combined both arrays and place the weights into a map as keys. Return a list sorted and transformed each Pair into a list.

# Code
```
class Solution {
fun mergeSimilarItems(items1: Array<IntArray>, items2: Array<IntArray>): List<List<Int>> {
    val list = emptyList<List<Int>>().toMutableList()
    (items1 + items2)
        .groupBy { it[0] }
        .toSortedMap()
        .forEach() { (key, value) ->
            val temp = value.map { it[1] }.sum()
            list.add(listOf(key, temp))
        }
    return list
}
}
```