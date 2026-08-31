# Scala solution with recursion

**Author:** dustin10
**Votes:** 5
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/350326/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/350326/)

---

Perform an in order traversal of the tree the kth item we encounter is the value to return.
```
  object Solution {
    def kthSmallest(root: TreeNode, k: Int): Int = {
      def inOrderTraversal(root: TreeNode, count: Int): (Int, Option[Int]) = {
        if (root == null) (count, None)
        else {
          inOrderTraversal(root.left, count) match {
            case (_, Some(solution: Int)) =>
              (0, Some(solution))
            case (countRemaining: Int, None) if countRemaining == 1 =>
              (0, Some(root.value))
            case (countRemaining: Int, None) =>
              inOrderTraversal(root.right, countRemaining - 1)
          }
        }
      }

      inOrderTraversal(root, k)._2.get
    }
  }
````