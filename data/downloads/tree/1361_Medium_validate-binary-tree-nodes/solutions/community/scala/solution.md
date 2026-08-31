# using DFS, beats 100% runtime

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-binary-tree-nodes/solutions/6023058/](https://leetcode.com/problems/validate-binary-tree-nodes/solutions/6023058/)

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
import scala.collection.mutable
object Solution {
  def validateBinaryTreeNodes(n: Int, leftChild: Array[Int], rightChild: Array[Int]): Boolean = {
    val root=findRootNode(leftChild,rightChild, n)
    if(root== -1)false
    else{
      val seen=Array.fill(n)(false)
      seen(root)=true
      val stack= new mutable.Stack[Int]()
      stack.addOne(root)
      var valid=true
      while(stack.nonEmpty && valid){
        val node=stack.pop()
        val children=List(leftChild(node),rightChild(node)).filterNot(_ == -1)
        children.foreach{child=>
          if(seen(child))valid=false
          stack.push(child)
          seen(child)=true
        }
      }
      if(valid) seen.count(_ == true) == n else false
    }
  }
  
  private def findRootNode(leftChild:Array[Int],rightChild:Array[Int],n:Int)={
    val allChildren=(leftChild.filterNot(_== -1)++rightChild.filterNot(_ == -1)).toSet
    val roots=(0 until n) .filterNot {i=>allChildren.contains(i)}
    if(roots.size != 1)-1 else roots.head
  }
}
```