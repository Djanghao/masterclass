# beats 100% runtime, memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-possible-full-binary-trees/solutions/6021604/](https://leetcode.com/problems/all-possible-full-binary-trees/solutions/6021604/)

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
  val memo: mutable.Map[Integer, List[TreeNode]] = mutable.Map.empty
  def allPossibleFBT(n: Int): List[TreeNode] = {
    if (n % 2 == 0) Nil
    else if (n == 1) List(new TreeNode(0))
    else if (memo.contains(n)) memo(n)
    else {
      val result = (1 until n by 2).flatMap { i =>
        val leftTree = allPossibleFBT(i)
        val rightTree = allPossibleFBT(n - i - 1)
        leftTree.flatMap { eachLeftTree =>
          rightTree.map { eachRightTree =>
            new TreeNode(0, eachLeftTree, eachRightTree)
          }
        }
      }
      memo.put(n, result.toList)
      result.toList
    }
  }
}
```