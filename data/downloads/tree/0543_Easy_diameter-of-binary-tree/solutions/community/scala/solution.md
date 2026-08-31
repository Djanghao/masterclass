# Scala solution

**Author:** acamillo
**Votes:** 2
**Link:** [https://leetcode.com/problems/diameter-of-binary-tree/solutions/1464804/](https://leetcode.com/problems/diameter-of-binary-tree/solutions/1464804/)

---

Honestly I haven't found this problem that easy, as in my case, it took me more than 20mins to figure it out.

```scala
  def diameterOfBinaryTree(root: TreeNode): Int = {
    
    // returns max depth, max diameter
    def loop(node: TreeNode): (Int, Int) =
      if (node == null) (0, 0)
      else {
        val (leftHeight, leftDiameter) = loop(node.left)
        val (rightHeight, rightDiameter) = loop(node.right)

        // this is the tricky part.
        // the max diameter could either pass by the current node or not.
        // In the first case the diameter would be (leftHeight + rightHeight) ie the distance between the two deepest nodes
        // OR is could lay in either of the node subtrees, in which case it would be the max {leftDiameter, rightDiameter}
        (
          1 + Math.max(leftHeight, rightHeight), // the node height
          Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter)) // the maximum diameter
        )
      }

    loop(root)._2
  }