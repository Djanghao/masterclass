# Kotlin Frequency Map Imperative Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/5385068/](https://leetcode.com/problems/check-if-array-is-good/solutions/5385068/)

---

# Code
```
class Solution {
    fun isGood(nums: IntArray): Boolean {
        if (nums.size == 2) 
            return nums.first() == 1 && nums.last() == 1

        val freq = (1..nums.size - 1).associateWith{ 0 }.toMutableMap()
        for (n in nums)
            if (!freq.containsKey(n))
                return false 
            else 
                freq.put(n, freq.getOrElse(n) { 0 } + 1)

        for (i in 1..nums.size - 1)
            if (freq.getOrElse(i){ 0 } == 0)
                return false

        return freq.getOrElse(nums.size - 2){ 0 } == 1 
            && freq.getOrElse(nums.size - 1){ 0 } == 2
    }
}
```