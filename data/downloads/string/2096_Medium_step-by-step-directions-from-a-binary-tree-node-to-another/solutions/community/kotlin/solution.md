# Kotlin Solution (DFS) with explanation - 76.36% faster, 78.18% less space

**Author:** lnbecker
**Votes:** 2
**Link:** [https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/1817351/](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/1817351/)

---

```

class Solution {
    // Need to use StringBuilder instead of String because we can't change params in dfs function (they're vals not vars)
    var startPath: StringBuilder = StringBuilder()
    var endPath: StringBuilder = StringBuilder()
    
    fun getDirections(root: TreeNode?, startValue: Int, destValue: Int): String {
        // Populate startPath and endPath using depth first search
        dfs(root, startValue, startPath)
        dfs(root, destValue, endPath)
        
        // Remove direction from final path if it's identical in both paths (otherwise we are double counting)
        var maxLength = minOf(startPath.length, endPath.length)
        while (maxLength > 0 && startPath.get(0) == endPath.get(0)) {
            startPath.deleteCharAt(0)
            endPath.deleteCharAt(0)
            maxLength = minOf(startPath.length, endPath.length)
        }
        
        if (startPath.isNotEmpty()) {
            // Negate startPath - L & R will both be "U" negated. Replace every char
            val newStartPath = "U".repeat(startPath.length)
            return newStartPath + endPath
        } else {
            // There is no startPath
            return endPath.toString()
        }
    }
    
    fun dfs(node: TreeNode?, value: Int, path: StringBuilder): Boolean  {
        if (node == null) return false
        if (node.`val` == value) return true
        
        // Search left
        path.append("L")
        if (dfs(node.left, value, path)) 
            return true
        // If we get here, it wasn't found on left side so remove "L" from path
        path.deleteCharAt(path.length-1)
        
        // Search right
        path.append("R")
        if (dfs(node.right, value, path)) 
            return true
        // If we get here, it wasn't found on right side so remove "R" from path
        path.deleteCharAt(path.length-1)
        
        // Base case
        return false
    }
}```