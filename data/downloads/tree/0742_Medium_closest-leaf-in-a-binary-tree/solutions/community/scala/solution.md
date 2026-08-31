# Scala BFS solution with cache

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/3051069/](https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/3051069/)

---

# Intuition
Find K node first storing pointers to parent nodes and then run BFS from K node to all directions

# Approach
Since leaf nodes can be on top of K node, we need to store pointer to parent nodes. Therefore, we can make a wrapper around TreeNode class with parent property. During original search we will store parent pointers to let us backtrack up to the root node. Now we just need to run BFS to all directions (parent, left, right). We need to use cache to avoid loops and repeating searches (ie left -> parent -> left -> parent)

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
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
    def findClosestLeaf(root: TreeNode, k: Int): Int = {
        findKNode(root, k)
        .flatMap(findLeafNode)
        .map(_.value)
        .getOrElse(0)
    }

    def findLeafNode(node: TreeNodeWithParent): Option[TreeNode] = {
        val queue = mutable.Queue.from(List(node))
        val visited = mutable.Set.empty[Int]
        while(queue.nonEmpty) {
            val next = queue.dequeue()
            visited += next.node.map(_.value).getOrElse(0)
            next match {
                case TreeNodeWithParent(Some(node), _) if node.left == null && node.right == null =>
                    return Some(node)
                case TreeNodeWithParent(Some(node), parentOpt) =>
                    parentOpt match {
                        case Some(p) if !visited.contains(p.node.map(_.value).getOrElse(0)) =>
                            queue.enqueue(
                                TreeNodeWithParent(node = p.node, parent = p.parent)
                            )
                        case _ => 
                    }
                    List(Option(node.left), Option(node.right))
                    .filter(nOpt => !visited.contains(nOpt.map(_.value).getOrElse(0)))
                    .foreach {
                        nOpt =>
                            queue.enqueue(
                                TreeNodeWithParent(node = nOpt, parent = Some(TreeNodeWithParent(Some(node), parentOpt)))
                            )
                    }
                case TreeNodeWithParent(None, _) =>
            }
        }
        None
    }

    def findKNode(root: TreeNode, k: Int): Option[TreeNodeWithParent] = {
        val queue = mutable.Queue.from(List(
            TreeNodeWithParent(node = Option(root), parent = Option.empty[TreeNodeWithParent])
        ))
        while(queue.nonEmpty) {
            queue.dequeue() match {
                case TreeNodeWithParent(Some(node), parentOpt) if node.value == k =>
                    return Some(TreeNodeWithParent(Some(node), parentOpt))
                case TreeNodeWithParent(Some(node), parentOpt) =>
                    List(Option(node.left), Option(node.right)).foreach {
                        nOpt => queue.enqueue(TreeNodeWithParent(
                            node = nOpt, 
                            parent = Some(TreeNodeWithParent(Some(node), parentOpt))))
                    }
                case TreeNodeWithParent(None, _) => 
            }
        }
        None
    }

    case class TreeNodeWithParent(node: Option[TreeNode], parent: Option[TreeNodeWithParent])   
}
```