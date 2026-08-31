# Simple kotlin solution

**Author:** glukharev
**Votes:** 4
**Link:** [https://leetcode.com/problems/unique-number-of-occurrences/solutions/3536276/](https://leetcode.com/problems/unique-number-of-occurrences/solutions/3536276/)

---

- create a map where the key is a number and value is a frequence this number in input array
- put values to the set -> if the size of set (unic values) will be the same as a list of map's values all the frequencies are unic

# Complexity
- Time complexity:
$$O(n)$$


# Code
```
class Solution {
    fun uniqueOccurrences(arr: IntArray): Boolean {
        val map = mutableMapOf<Int, Int>()

        arr.forEach { i ->
            map.put(i, (map.get(i) ?: 0 ) + 1)
        }

        return map.values.size == map.values.toSet().size
    }
}
```