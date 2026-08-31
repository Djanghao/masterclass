# Amount of differences with minimum

**Author:** sav20011962
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/5882025/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/5882025/)

---

# Approach
https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/966522/kotlin-solution
# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
class Solution {
    fun minMoves(nums: IntArray): Int {
        var rez = 0L
        val len = nums.size
        var min = Int.MAX_VALUE
        for (i in 0 until len) {
            rez += nums[i]
            min = Math.min(min,nums[i])
        }
        rez -=(min*len)
        return rez.toInt()
    }
}
```