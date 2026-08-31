# beats 100% runtime

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-iii/solutions/6015246/](https://leetcode.com/problems/house-robber-iii/solutions/6015246/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
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
  val map: mutable.Map[TreeNode, Int] = mutable.Map.empty

  def rob(root: TreeNode): Int = {
    if (root == null) 0
    else if (map.contains(root)) map(root)
    else {
      val (rootselected, childrenSelected) = (root.left, root.right) match {
        case (null, null) => (root.value, 0)
        case (left, null) =>
          val rootSelected = root.value + rob(left.left) + rob(left.right)
          (rootSelected, rob(left))
        case (null, right) =>
          val rootSelected = root.value + rob(right.left) + rob(right.right)
          (rootSelected, rob(right))
        case (left, right) =>
          val rootSelected = root.value + rob(right.left) + rob(right.right) + rob(left.left) + rob(left.right)
          (rootSelected, rob(left) + rob(right))
      }
      map.put(root, Math.max(rootselected, childrenSelected))
      map(root)
    }
  }
}
```