# Kotlin - Iterative Postorder Traversal

**Author:** idiotleon
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/855282/](https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/855282/)

---

Solution - [github](https://github.com/An7One/leetcode-solutions-kotlin-an7one/tree/main/src/main/kotlin/com/an7one/leetcode/lvl4/lc0145)

<b>By Tag</b>
#BinaryTreeTraversal - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_algorithm/search/depth_first_search/by_data_structure/tree/traversal)
#IterativeDFS - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_algorithm/search/depth_first_search/other/dfs_in_iteration.txt)
#DFS - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_algorithm/search/depth_first_search)

```
/**
 * @author: Leon
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 *
 * Time Complexity:     O(N)
 * Space Complexity:    O(H)
 *
 * Reference:
 * https://leetcode.com/problems/binary-tree-postorder-traversal/discuss/45551/Preorder-Inorder-and-Postorder-Iteratively-Summarization/608296
 */
// time: O(N)
// space: O(H)
class Solution {
    fun postorderTraversal(root: TreeNode?): List<Int> {
        val ans = arrayListOf<Int>()
        if (root == null) return ans

        val stack = ArrayDeque<TreeNode>()
        var cur = root

        while (cur != null || stack.isNotEmpty()) {
            while (cur != null) {
                stack.addLast(cur)
                cur = cur.left
            }

            cur = stack.last()
            if (cur.right != null) {
                cur = cur.right
            } else {
                cur = stack.removeLast()
                ans.add(cur.`val`)

                while (stack.isNotEmpty() && cur == stack.last().right) {
                    cur = stack.removeLast()
                    ans.add(cur.`val`)
                }

                cur = null
            }
        }

        return ans
    }
}
```
