# [Kotlin] Simple & Easy DFS Solution (100% TC)

**Author:** devle79
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/4798891/](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/4798891/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

Simply, Count all nodes that `node.val == sum of all descendants`

Use Depth-First Search to calculate sum of all descendant nodes and compare it with parent node.

If same, count it up.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    private var count = 0

    fun equalToDescendants(root: TreeNode?): Int {
        findTotalSum(root)
        return count
    }

    private fun findTotalSum(node: TreeNode?): Int {
        if (node == null) {
            return 0
        }

        val leftSum = findTotalSum(node.left)
        val rightSum = findTotalSum(node.right)

        if (leftSum + rightSum == node.`val`) {
            count++
        }

        return node.`val` + leftSum + rightSum
    }
}
```