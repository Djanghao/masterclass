# Kotlin | O(n) | Straightforward Solution

**Author:** redb
**Votes:** 3
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/1793644/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/1793644/)

---

```kotlin
class Solution {
    fun replaceElements(arr: IntArray): IntArray {
        var max = -1
        
        for (i in arr.size - 1 downTo 0) {
            val current = arr[i]
            arr[i] = max
            max = maxOf(current, max)
        }
        
        return arr
    }
}
```