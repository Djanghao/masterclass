# Kotlin DFS beats 100% solution

**Author:** zimarev
**Votes:** 1
**Link:** [https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5750888/](https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5750888/)

---

![image.png](./images/0.png)

# Code
```kotlin []
class Solution {
    fun isSubPath(head: ListNode?, root: TreeNode?): Boolean {
        val starts = HashSet<TreeNode>() // remember the paths we already checked
        fun dfs(list: ListNode?, tree: TreeNode?): Boolean {
            list ?: return true // check list ended \u2014 all nodes matched
            tree ?: return false // check list did not end, but tree did \u2014 not all nodes matched
            if (list.`val` == tree.`val`) { // if nodes match, try to check deeper
                if (dfs(list.next, tree.left) || dfs(list.next, tree.right)) {
                    return true
                }
            }
            if (!starts.add(tree)) return false // if path did not match, start from list beginning
            return dfs(head, tree.left) || dfs(head, tree.right)
        }
        return dfs(head, root)
    }
}
```