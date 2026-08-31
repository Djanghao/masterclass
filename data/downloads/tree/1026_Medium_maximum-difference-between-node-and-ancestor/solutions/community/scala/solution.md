# Short & Easy to read Scala recursive approach (non-functional) (Beats 80% +)

**Author:** stan256
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4683250/](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4683250/)

---


<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) - as it's recursion based solution
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def maxAncestorDiff(root: TreeNode): Int = {

        def dfs(node: TreeNode, min: Int, max: Int, maxDiff: Int): Int = {
            if (node == null)
                return maxDiff
            val subResult = Math.max(Math.abs(min - node.value), Math.abs(max - node.value))

            Math.max(
                dfs(node.left,  Math.min(min, node.value), Math.max(max, node.value), Math.max(subResult, maxDiff)),
                dfs(node.right, Math.min(min, node.value), Math.max(max, node.value), Math.max(subResult, maxDiff))
            )
        }

        dfs(root, root.value, root.value, 0)
    }
}
```