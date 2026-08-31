# Kotlin Solution

**Author:** joshua593sk8
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-paths/solutions/1777433/](https://leetcode.com/problems/binary-tree-paths/solutions/1777433/)

---

```
class Solution {
    fun binaryTreePaths(root: TreeNode?): List<String> {
        val list = mutableListOf<String>()
        binaryTreePaths(root, "", list)
        return list
        
    }
    
    private fun binaryTreePaths(
        root: TreeNode?, 
        value: String, 
        list: MutableList<String>
    ) {
        
        if (root == null) return
        if (root?.left == null && root?.right == null) {
            list.add("${value}${root?.`val`}")
            return
        }
        binaryTreePaths(root?.left, "${value}${root?.`val`}->", list)
        binaryTreePaths(root?.right, "${value}${root?.`val`}->", list)
    }
}
```