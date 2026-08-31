# Koltin Oneliner

**Author:** mexler
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-the-people/solutions/5519198/](https://leetcode.com/problems/sort-the-people/solutions/5519198/)

---


# Code
```
class Solution {
    fun sortPeople(names: Array<String>, heights: IntArray) = names
        .zip(heights.toMutableList())
        .sortedByDescending{it.second}
        .map{it.first}
        .toTypedArray()
}
```