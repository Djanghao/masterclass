# Javascript, with comment.

**Author:** andyoung
**Votes:** 2
**Link:** [https://leetcode.com/problems/change-the-root-of-a-binary-tree/solutions/1105298/](https://leetcode.com/problems/change-the-root-of-a-binary-tree/solutions/1105298/)

---

**Notes:**

1. Original idea comes from this [post](https://leetcode.com/problems/change-the-root-of-a-binary-tree/discuss/979784/Easy-Python-and-C%2B%2B-solution-with-explanation), excellent explanation over there. 
2. Also tweaked the code a little bit.

```
var flipBinaryTree = function(root, leaf) {
  
  const flip = (node, newParent) => {
    const parent = node.parent; // record current node's parent
    node.parent = newParent;    // assign new parent as node's parent
    if (!parent) return;        // return if reach root node
	
    // current node's left child becomes right child
    if (node.left) node.right = node.left;
    node.left = parent;         // original parent becomes node's left child
    // clear orignal parent's left or right child
    (parent.left == node) ?  parent.left = null : parent.right = null;
	
    flip(parent, node);        // go up and flip parent node
  }
  
  flip(leaf, null);
  
  return leaf;
}

```