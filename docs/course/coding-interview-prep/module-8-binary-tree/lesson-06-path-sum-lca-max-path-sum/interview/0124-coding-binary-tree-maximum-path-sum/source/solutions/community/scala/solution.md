# Scala solution

**Author:** dustin10
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/328829/](https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/328829/)

---

Note, I came up with this solution without looking at other user's comments / submissions so I might be performing extra work here, but it passes the leetcode submission test.

# Solution without using Options
```
/**
  A tree nodes max path sum is equal to it's connected maximum or local maximum
  We will consider a local maximum a value that cannot be combined with the parent value
  A connected maximum value is a value that can be combined with the parent
  What do we consider for the local maximum
    - Left's connected / local maximum
    - Right's connected / local maximum
    - The root value only
    - The left connected maximum + right connected maximum + root value (then this value cannot be combined with a parent)
  What do we consider for a connected maximum that can then be combined with the parent
    - root value
    - left connected maximum + root value
    - right connected maximum + root value
  */
object Solution {
  def maxPathSum(root: TreeNode): Int = {
    def maxValues(root: TreeNode): (Int, Int) = {
      val leftMaxes: (Int, Int) = if (root.left != null) maxValues(root.left) else (Int.MinValue, Int.MinValue)
      val rightMaxes: (Int, Int) = if (root.right != null) maxValues(root.right) else (Int.MinValue, Int.MinValue)

      val connectedMaximum = Seq(
        root.value,
        if (leftMaxes._1 == Int.MinValue) Int.MinValue else leftMaxes._1 + root.value,
        if (rightMaxes._1 == Int.MinValue) Int.MinValue else rightMaxes._1 + root.value
      ).max

      val localMaximum = Seq(
        leftMaxes._1,
        leftMaxes._2,
        rightMaxes._1,
        rightMaxes._2,
        root.value,
        if (leftMaxes._1 == Int.MinValue || rightMaxes._1 == Int.MinValue) Int.MinValue else leftMaxes._1 + rightMaxes._1 + root.value
      ).max

      (connectedMaximum, localMaximum)
    }

    val (connectedMaximum: Int, localMaximum: Int) = maxValues(root)
    Math.max(connectedMaximum, localMaximum)
  }
}
```

# Solution with Options
```
    def maxPathSum(root: TreeNode): Int = {
      def maxValues(root: TreeNode): (Int, Int) = {
        val leftMaxes: Option[(Int, Int)] = if (root.left != null) Some(maxValues(root.left)) else None
        val rightMaxes: Option[(Int, Int)] = if (root.right != null) Some(maxValues(root.right)) else None

        val connectedMaximum = (
          Seq(root.value) ++
            leftMaxes.map(values => values._1 + root.value).toSeq ++
            rightMaxes.map(values => values._1 + root.value).toSeq
          ).max

        val localMaximum = (
          leftMaxes.map(values => Seq(values._1, values._2)).getOrElse(Seq.empty) ++
            rightMaxes.map(values => Seq(values._1, values._2)).getOrElse(Seq.empty) ++
            Seq(root.value) ++
            (for {
              left <- leftMaxes.map(_._1)
              right <- rightMaxes.map(_._1)
            } yield left + right + root.value).toSeq
          ).max

        (connectedMaximum, localMaximum)
      }

      val (connectedMaximum: Int, localMaximum: Int) = maxValues(root)
      Math.max(connectedMaximum, localMaximum)
    }
````