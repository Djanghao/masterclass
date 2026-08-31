# [Scala] recursive, functional

**Author:** d3r1v3d
**Votes:** 5
**Link:** [https://leetcode.com/problems/symmetric-tree/solutions/318278/](https://leetcode.com/problems/symmetric-tree/solutions/318278/)

---

```
/**
 * Definition for a binary tree node.
 * class TreeNode(var _value: Int) {
 *   var value: Int = _value
 *   var left: TreeNode = null
 *   var right: TreeNode = null
 * }
 */
def pairIsSynched(root: TreeNode, reflection: TreeNode): Boolean =
  (Option(root), Option(reflection)) match {
	case (None, Some(_)) | (Some(_), None) =>
	  false
	case (None, None) =>
	  true
	case (Some(root), Some(reflection)) =>
	  Seq(
		root.value == reflection.value,
		pairIsSynched(root.left, reflection.right),
		pairIsSynched(root.right, reflection.left)
	  ).reduce(_ && _)
  }

def isSymmetric(root: TreeNode): Boolean =
  Option(root) match {
	case None =>
	  true
	case Some(root) =>
	  pairIsSynched(root.left, root.right)
  }
```