# ✅ Kotlin Short and Easy Solution || Commented

**Author:** Z3ROsum
**Votes:** 2
**Link:** [https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/2301922/](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/2301922/)

---

```
class Solution {
    fun canMakeArithmeticProgression(arr: IntArray): Boolean {
        arr.sort() // sort it
        val firstDiff = arr[1] - arr[0]
        for (i in 1 until arr.size) {
		    // check if the differences are the same
            if (arr[i] - arr[i - 1] != firstDiff) {
                return false // can NOT make arithmetic progression
            }
        }
        return true // if they are all the same
    }
}
```