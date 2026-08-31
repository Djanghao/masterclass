# ✅ 94% 🌴 tailrec recursion || optimum || no fun

**Author:** sunnoca
**Votes:** 3
**Link:** [https://leetcode.com/problems/delete-node-in-a-bst/solutions/4273530/](https://leetcode.com/problems/delete-node-in-a-bst/solutions/4273530/)

---

# Please Upvote \uD83D\uDD1D Appreciations!
![image.png](./images/0.png)
# Complexity
- Time complexity: **O(** log n **)**
- Space complexity: **O(** 1 **)**
# Code
```
class Solution {
    fun deleteNode(root: TreeNode?, key: Int): TreeNode? {
        tailrec fun getNode(curr: TreeNode?, prev: TreeNode?): Pair<TreeNode?, TreeNode>? =
            if (curr == null) null
            else if (curr.`val` == key) prev to curr
            else if (curr.`val` < key) getNode(curr.right, curr)
            else getNode(curr.left, curr)

        val (prev, curr) = getNode(root, null) ?: return root

        var leftmost = curr.right
        while (leftmost?.left != null) leftmost = leftmost.left
        leftmost?.left = curr.left // connect left part

        prev?.run { // connect to prev
            if (left == curr) left = curr.right ?: curr.left
            else right = curr.right ?: curr.left
        } ?: return curr.right ?: curr.left

        return root
    }
}
```