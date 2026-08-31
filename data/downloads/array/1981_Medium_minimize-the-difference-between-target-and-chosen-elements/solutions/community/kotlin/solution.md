# [Kotlin] DP | Fastest

**Author:** user1572H
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/2558094/](https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/2558094/)

---

```
class Solution {
    private val minDiff = mutableMapOf<Int, Int>()
    
    fun minimizeTheDifference(mat: Array<IntArray>, target: Int): Int {
        return getMinDiff(mat, 0, target)
    }
    
    fun getMinDiff(mat: Array<IntArray>, firstRow: Int, target: Int): Int {
        var cached = minDiff[firstRow * 1000 + target]
        if (cached == null) {
            var min = Int.MAX_VALUE
            for(value in mat[firstRow]) {
                val diff = if (firstRow >= mat.size - 1) {
                    Math.abs(target - value)
                } else if (target - value < 0) {
                    getMinDiff(mat, firstRow + 1, 0) - (target - value)
                } else {
                    getMinDiff(mat, firstRow + 1, target - value)
                }

                min = Math.min(min, diff)
            }
            cached = min
            minDiff[firstRow * 1000 + target] = min
        }
        
        return cached
    }
}