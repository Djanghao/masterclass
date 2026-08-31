# Simple Solution |  Time : O(n) | Memory O(1)

**Author:** lawos98
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/3301511/](https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/3301511/)

---

Scala Solution 

# Explanation

We can define the task differently we are looking for such an uninterrupted sequence of indexes of null nodes ( x to y )

Where :
node - index
node.left - index * 2
node.right - index * 2 + 1

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def isCompleteTree(root: TreeNode): Boolean = {
      var count = 0
      var minVal = 1000
      var maxVal = 0
               
      def rec(index:Int,node:TreeNode): Unit = {
        if(node==null){
           count+=1
           minVal=minVal.min(index)
           maxVal=maxVal.max(index)
           }
        else{
          rec(index*2,node.left)
          rec(index*2+1,node.right)
        }
      }      
      rec(1,root)

      count==maxVal-minVal+1
    }
}
```