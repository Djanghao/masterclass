# Kotlin Declarative Approach + Extension Function

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-array-concatenation-value/solutions/5467208/](https://leetcode.com/problems/find-the-array-concatenation-value/solutions/5467208/)

---

# Code
```
class Solution {
    fun IntArray.mid() = (this.size - 1) / 2

    fun findTheArrayConcVal(nums: IntArray) = (0..nums.mid())
        .map{ l ->
            if (l == nums.mid() && nums.size % 2 == 1)
                "${nums[l]}"
            else
                "${nums[l]}${nums[nums.size - 1 - l]}"
        }
        .onEach{ println(it) }
        .map{ it.toLong() }
        .sum()
}
```