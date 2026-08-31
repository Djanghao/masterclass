# Scala solution with recursion

**Author:** dustin10
**Votes:** 3
**Link:** [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/350350/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/350350/)

---

```
  object Solution {
    def sortedArrayToBST(nums: Array[Int]): TreeNode = {
      def toBinaryTree(left: Int, right: Int): TreeNode = {
        if (left > right) null
        else {
          val mid: Int = (left + right + 1) / 2
          val node = new TreeNode(nums(mid))
          node.left = toBinaryTree(left, mid - 1)
          node.right = toBinaryTree(mid + 1, right)
          node
        }
      }

      toBinaryTree(0, nums.length - 1)
    }
  }
```