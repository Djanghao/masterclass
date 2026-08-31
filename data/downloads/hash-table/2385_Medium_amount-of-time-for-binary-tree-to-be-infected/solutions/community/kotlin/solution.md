# Simple Kotlin Solution

**Author:** SangramM
**Votes:** 2
**Link:** [https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4538516/](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4538516/)

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
    var ans = -1
    fun amountOfTime(root: TreeNode?, start: Int): Int {
        ans = 0
		dfs(root, start)

		return ans
    }

    private fun dfs(root: TreeNode?, start: Int): IntArray {
		if (root == null)
			return IntArray(2) { 0 }

		var left = dfs(root.left, start);
		var right = dfs(root.right, start);

		val h = Math.max(left[1], right[1])

		if (left[0] == 1) {
			ans = Math.max(ans, left[1] + right[1])
			left[1] += 1
			return left
		} else if (right[0] == 1) {
			ans = Math.max(ans, left[1] + right[1])
			right[1] += 1
			return right
		}

		if(root.`val` == start){
			ans = Math.max(h, ans)
			return IntArray(2) { 1 }
		}

		left[1] = h + 1
		return left
	}
}
```