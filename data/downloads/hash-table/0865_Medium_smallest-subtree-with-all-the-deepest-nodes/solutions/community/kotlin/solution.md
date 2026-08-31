# Kotlin approach, beats 96%

**Author:** masterox
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/4989339/](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/4989339/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
![Screenshot 2024-04-07 at 11.03.35\u202FAM.png](./images/0.png)

# Approach
<!-- Describe your approach to solving the problem. -->
1. Start from root, and recurse to left and right
2. If Node is null, return current level
3. if left and right return same level, then return this node with level of left (since right has same level)
4. Else return node with higher level
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$: Since each node is visited once
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$: If memory stack is not considered, else $$O(n)$$ 
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
    fun subtreeWithAllDeepest(root: TreeNode?): TreeNode? {
        var pair = go(root, 0)
        return pair.first
    }

    fun go(root: TreeNode?, level: Int): Pair<TreeNode?, Int> {
        root ?: return Pair(root, level)

        var left  = go(root.left, level+1)
        var right = go(root.right, level+1)

        if(left.second > right.second) {
            return Pair(left.first, left.second)
        }

        if(right.second > left.second) {
            return Pair(right.first, right.second)
        }
        return Pair(root, left.second)
    }
}
```