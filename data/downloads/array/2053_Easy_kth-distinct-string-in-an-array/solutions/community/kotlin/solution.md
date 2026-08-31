# Simple Kotlin solution using LinkedHashMap

**Author:** DmitryNekrasov
**Votes:** 3
**Link:** [https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5589674/](https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5589674/)

---

# Code
```
class Solution {
    fun kthDistinct(arr: Array<String>, k: Int): String {
        val counts = LinkedHashMap<String, Int>()
        for (s in arr) {
            counts[s] = (counts[s] ?: 0) + 1
        }
        val distincts = counts.filter { (k, v) -> v == 1 }.keys.toList()
        return if (k > distincts.size) "" else distincts[k - 1]
    }
}
```