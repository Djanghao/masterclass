# [Scala] Simple solution for 700. Search in a Binary Search Tree, beats 95%

**Author:** stefancomanita
**Votes:** 1
**Link:** [https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/1947725/](https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/1947725/)

---

Scala solution for 700. Search in a Binary Search Tree, simple solution, beats 95% Scala solutions.

```
	object Solution {
    
  def searchBST(root: TreeNode, v: Int): TreeNode = {

    searchTreeBase(root, v)
  }

  private def searchTreeBase (node: TreeNode, target: Int): TreeNode = {

    if (node == null) {
      return null
    }

    if (node.value == target) {
      return node
    }

    if (target > node.value) {
      return searchTreeBase(node.right, target)
    }

    searchTreeBase(node.left, target)
  }
}
```