# Kotlin solution

**Author:** armat
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/3833772/](https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/3833772/)

---

# Code
```
class Solution {
    fun smallestCommonElement(mat: Array<IntArray>): Int {
        val frequencyMap = IntArray(10000)

        for (row in mat) {
            for (num in row) {
                frequencyMap[num-1] = frequencyMap[num-1] + 1
                if (frequencyMap[num-1] == mat.size)
                    return num
            }
        }

        return -1
    }
}
```