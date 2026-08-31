# 97% Kotlin solution (6 lines of code)

**Author:** masterjefferson
**Votes:** 61
**Link:** [https://leetcode.com/problems/two-sum/solutions/265311/](https://leetcode.com/problems/two-sum/solutions/265311/)

---

```kotlin
class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val diffMap = mutableMapOf<Int, Int>()
        nums.forEachIndexed { index, int -> 
            diffMap[int]?.let { return intArrayOf(it, index) }
            diffMap[target - int] = index   
        }
        return intArrayOf()
    }
}
```