# :: Kotlin :: Don't be distracted from the tree!

**Author:** znxkznxk1030
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5104627/](https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5104627/)

---

# 'edges' is just a macguffin.

All information needed from the tree structure is
This means that an even number of xor operations can be performed.

# Code
```
class Solution {
    fun maximumValueSum(nums: IntArray, k: Int, edges: Array<IntArray>): Long {
        var result = nums.map{it.toLong()}.sum()!!
        val n = nums.size
        var xors = Array(n){ intArrayOf(nums[it], nums[it] xor k) }

        val list = xors.sortedWith(compareBy({ it[0] - it[1] }))

        for (i in 1 until n step 2) {
            val temp = result - list[i][0] - list[i - 1][0] + list[i][1] + list[i - 1][1]
            if (temp < result) break
            result = temp
        }

        return result
    }
}
```