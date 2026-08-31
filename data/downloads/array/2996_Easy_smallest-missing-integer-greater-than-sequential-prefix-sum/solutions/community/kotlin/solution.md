# Kotlin Straightforward Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/5555744/](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/5555744/)

---

# Code
```
class Solution {

    fun IntArray.isPrefixSequential(to: Int): Boolean {
        for (j in 1..to)
            if (this[j] != this[j - 1] + 1)
                return false
        return true
    }

    fun IntArray.longestPrefixSequential() : IntArray {
        for (i in this.size - 1 downTo -1)
            if (this.isPrefixSequential(i))
                return this.sliceArray(0..i)
        return intArrayOf(this.first())
    }

    fun missingInteger(nums: IntArray): Int {
        val longest = nums.longestPrefixSequential()
        val set = nums.toSet()
        var x = longest.sum()
        
        while (true)
            if (!set.contains(x)) return x
            else x += 1

        return Int.MAX_VALUE
    }
}
```