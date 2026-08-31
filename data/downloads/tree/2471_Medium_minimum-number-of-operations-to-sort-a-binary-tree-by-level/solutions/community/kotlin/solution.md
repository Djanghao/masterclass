# Simple Kotlin Solution

**Author:** sanjarkhodzhaev
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/4745362/](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/4745362/)

---

# Code
```
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun minimumOperations(root: TreeNode?): Int {
        if (root == null) return 0
        val queue = LinkedList<TreeNode>().apply { offer(root) }
        var result = 0

        while (!queue.isEmpty()) {
            val nums = ArrayList<Int>()
            for (i in queue.indices) {
                val node = queue.poll()
                nums.add(node.`val`)
                node.left?.let(queue::offer)
                node.right?.let(queue::offer)
            }
            result += minSwaps(nums)
        }

        return result
    }

    private fun minSwaps(nums: List<Int>): Int {
        var swaps = 0
        val list = nums.toMutableList()
        val sortedList = ArrayList(list.sorted())
        val map = HashMap<Int, Int>()

        for (i in list.indices) {
            map[nums[i]] = i
        }

        for (i in list.indices) {
            val num = list[i]
            val sortedNum = sortedList[i]
            if (num != sortedNum) {
                map[num] = map[sortedNum]!!
                list[map[sortedNum]!!] = num
                swaps++
            }
        }
        return swaps
    }
}
```