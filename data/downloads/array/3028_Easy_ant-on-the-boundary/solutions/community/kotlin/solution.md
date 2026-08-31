# Another variant

**Author:** HarshPanchal18
**Votes:** 0
**Link:** [https://leetcode.com/problems/ant-on-the-boundary/solutions/5697242/](https://leetcode.com/problems/ant-on-the-boundary/solutions/5697242/)

---

# Code
```kotlin []
class Solution {
    fun returnToBoundaryCount(nums: IntArray): Int {
        return nums.fold(Pair(0, 0)) { (sum, count), n ->
            Pair((sum + n), count + if ((sum + n) == 0) 1 else 0)
        }.second
    }
}
```