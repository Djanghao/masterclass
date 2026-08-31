# Kotlin recursive 43-liner solution || With Comments

**Author:** Z3ROsum
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/2104821/](https://leetcode.com/problems/maximum-binary-tree/solutions/2104821/)

---

```
class Solution {
    private val tree = TreeNode(-1) // the tree
    fun constructMaximumBinaryTree(nums: IntArray): TreeNode? {
        buildTree(nums.toList(), tree, -1)
        return tree
    }
    
    fun buildTree(nums: List<Int>, parent: TreeNode, direction: Int) {
	    // check cases
        if (nums.isEmpty()) return
        if (nums.size == 1) {
            if (direction == 0) parent.left = TreeNode(nums.first())
            else if (direction == 1) parent.right = TreeNode(nums.first())
            else parent.`val` = nums.first()
            return
        }
        
		// get max value + index
        var max = Int.MIN_VALUE
        var maxIndex = -1
        for (i in nums.indices) {
            if (nums[i] > max) {
                max = nums[i]
                maxIndex = i
            }
        }
        
		// building tree logic
        var newParent = TreeNode(max)
        if (parent.`val` == -1) {
            parent.`val` = newParent.`val`
            newParent = parent
        } else {
            when (direction) {
                1 -> parent.right = newParent
                0 -> parent.left = newParent
                else -> {} // initial direction is -1
            }
        }
        val first = nums.subList(0, maxIndex) // first half
        val second = nums.subList(maxIndex + 1, nums.size) // second half
        
        buildTree(first, newParent, 0) // build left
        buildTree(second, newParent, 1) // build right
    }
}
```