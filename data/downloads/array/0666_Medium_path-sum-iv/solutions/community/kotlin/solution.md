# Top-down approach. O(n)

**Author:** zpei100
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-sum-iv/solutions/3956011/](https://leetcode.com/problems/path-sum-iv/solutions/3956011/)

---

# Intuition
The inputs are ordered by level and position, so iterating over the array is equivalent to traversing the tree from top to bottom, left to right.

When we traverse from top to bottom, we can accumulate the value from the parent to each child: sum[child] = childValue + sum[parent] where parent can be easily calculated from child. Why do we do this? Because the existance of each child implies the value of the parent is added once. The accumulated sum at each node represents the sum of the path from the root to that node.

In the end, add the sums of all leaves.

# Code
```
class Solution {
    fun pathSum(nums: IntArray): Int {
        val score = mutableMapOf<Int, Int>()
        val leaves = mutableSetOf<Int>()
        for (num in nums) {
            val numstr = num.toString()

            val level = numstr[0].toString().toInt()
            val position = numstr[1].toString().toInt()

            val parent = (level - 1) * 10 + ((position + 1) / 2)
            val value = numstr[2].toString().toInt()
            val self = level * 10 + position

            if (level == 1) {
                score[self] = value
            } else {
                score[self] = score.getValue(parent) + value
                leaves.remove(parent)
            }
            leaves.add(self)
        }
        return leaves.map { score.getValue(it) }.sum() ?: 0
    }
}


/**

                                11
                21                              22
        31              32              33              34
    41      42      43      44      45      46      47      48

 */
```