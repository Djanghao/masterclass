# Beats 100% in performance

**Author:** abhilashg130
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/5301627/](https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/5301627/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n) or O(m*logn), n = no of tree nodes, m = no. of queries
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
    fun closestNodes(root: TreeNode?, queries: List<Int>): List<List<Int>> {
        val nums = mutableListOf<Int>()
        inorder(root, nums)
        val ans = mutableListOf<MutableList<Int>>()
        for(i in queries) {
            val mini = binarySearch(i+1, nums) - 1
            val maxi = binarySearch(i, nums)
            var tempmi = if(mini >= 0 && mini < nums.size) nums[mini] else -1
            var tempma = if(maxi >= 0 && maxi < nums.size) nums[maxi] else -1

            ans.add(mutableListOf(tempmi, tempma))
        }
        return ans
    }

    private fun binarySearch(t: Int, nums: List<Int>): Int {
        var l = 0
        var r = nums.size
        while(l<r) {
            var mid = l + (r-l)/2
            if(nums[mid] >= t) {
                r = mid
            } else {
                l = mid + 1
            }     
        }
        return l
    }

    private fun inorder(root: TreeNode?, nums: MutableList<Int>) {
        if(root == null) return
        inorder(root.left, nums)
        nums.add(root.`val`)
        inorder(root.right, nums)
    }
}
```