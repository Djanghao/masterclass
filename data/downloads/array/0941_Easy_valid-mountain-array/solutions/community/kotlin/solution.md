# Kotlin

**Author:** eric6300
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-mountain-array/solutions/1607507/](https://leetcode.com/problems/valid-mountain-array/solutions/1607507/)

---

Runtime: 208 ms, faster than 98.99% of Kotlin online submissions for Valid Mountain Array.
Memory Usage: 38.2 MB, less than 62.63% of Kotlin online submissions for Valid Mountain Array.

```
class Solution {
    fun validMountainArray(arr: IntArray): Boolean {
        if (arr.size < 3) return false
        var index = 1
        while (index < arr.size && arr[index] > arr[index - 1]) {
            index++
        }
        if (index == 1 || (index == arr.size)) return false
        while (index < arr.size && arr[index] < arr[index - 1]) {
            index++
        }
        return index == arr.size
    }
}
```
