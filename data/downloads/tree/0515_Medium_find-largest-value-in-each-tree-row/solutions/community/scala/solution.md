# beats 100% runtime

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/6023096/](https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/6023096/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
 import scala.collection.mutable
object Solution {
  def largestValues(root: TreeNode): List[Int] = {
    val result= mutable.ListBuffer[Int]()
    if(root!= null){
    val queue= new mutable.Queue[TreeNode]
    queue.addOne(root)
    while(queue.nonEmpty){
      val size=queue.size
      val maximum=(1 to size).map{_=>
        val element=queue.dequeue()
        if(element.left!=null) 
          queue.addOne(element.left)
        if(element.right!= null)
          queue.addOne(element.right)
        element.value
      }.max
      result.addOne(maximum)
    }
    }
    result.toList
  }
}
```