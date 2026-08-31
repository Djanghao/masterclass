# Simple Kotlin Solution

**Author:** jkgrg
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/3509249/](https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/3509249/)

---



# Code
```
class Solution {
    fun findRestaurant(list1: Array<String>, list2: Array<String>): Array<String> {
        val map = mutableMapOf<String, Int>()
        for (i in list1.indices) {
            map[list1[i]] = i
        }

        val result = mutableListOf<String>()
        var minIndexSum = Int.MAX_VALUE
        for (j in list2.indices) {
            var k = map[list2[j]]
            if (k != null && j + k <= minIndexSum) {
                if (j + k < minIndexSum) {
                    result.clear()
                    minIndexSum = j + k
                }
                result.add(list2[j])

            }
        }
        return result.toTypedArray()
    }
}
```