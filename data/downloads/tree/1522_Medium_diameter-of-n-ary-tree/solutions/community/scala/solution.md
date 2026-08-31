# scala code

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/4629414/](https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/4629414/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$ 

# Code
```
/**
 * Definition for a Node.
 * class Node(var _value: Int) {
 *   var value: Int = _value
 *   var children: List[Node] = List()
 * }
 */

object Solution {
  def diameter(root: Node): Int = {
    if (root == null || root.children.isEmpty) {
      0
    } else {
      var maxDiameter = Array(0)
      diameterHelper(root, maxDiameter)
      maxDiameter(0)
    }
  }

  private def diameterHelper(root: Node, maxDiameter: Array[Int]): Int = {
    if (root.children.isEmpty) {
      0
    } else {
      var maxHeight1 = -1
      var maxHeight2 = -1

      for (child <- root.children) {
        val childHeight = diameterHelper(child, maxDiameter)
        if (childHeight > maxHeight1) {
          maxHeight2 = maxHeight1
          maxHeight1 = childHeight
        } else if (childHeight > maxHeight2) {
          maxHeight2 = childHeight
        }
      }

      maxDiameter(0) = Math.max(maxDiameter(0), maxHeight1 + maxHeight2 + 2)
      maxHeight1 + 1
    }
  }
}

```