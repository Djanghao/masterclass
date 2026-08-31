# DFS Solution Kotlin

**Author:** Sahil14_11
**Votes:** 1
**Link:** [https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1587685/](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1587685/)

---

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
    val list:MutableList<Int> = mutableListOf()
    var i=0
    
    fun flipMatchVoyage(root: TreeNode?, voyage: IntArray): List<Int> {
        
        flip(root,voyage)
        if(list.isNotEmpty() && list.get(0)==-1){
            list.clear()
            list.add(-1)
        }
        return list
    }
    fun flip(root:TreeNode?,arr:IntArray){
        if(root==null) return
        if(root!=null){
            if(root.`val`!=arr[i]){
                list.clear()
                list.add(-1)
            }
        }
        i++
        if(i<arr.size&&root.left!=null&&root.left.`val`!=arr[i]){
            list.add(root.`val`)
            flip(root?.right,arr)
            flip(root?.left,arr)
        }else{
            flip(root?.left,arr)
            flip(root?.right,arr)
        }
    }
}