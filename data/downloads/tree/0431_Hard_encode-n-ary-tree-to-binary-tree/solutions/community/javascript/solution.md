# [Javascript] DFS

**Author:** anna-hcj
**Votes:** 2
**Link:** [https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/1991344/](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/1991344/)

---

**Solution: Recursive DFS**

Children of a node can be the left child of a binary tree node.
Chain the same level children nodes as the right child, making it like a linked list: 1 -> 2 -> 3 (all as right children)

Time Complexity: `O(n)` 99ms
Space Complexity: `O(n)` 47.4MB
```
class Codec {
  constructor() {
  }
  // Encodes an n-ary tree to a binary tree.
  encode = function(root) {
    if (!root) return null;
    let newNode = new TreeNode(root.val);
    if (root.children.length) newNode.left = this.encode(root.children[0]);
    let sameLevel = newNode.left;
    
    for (let i = 1; i < root.children.length; i++) {
      sameLevel.right = this.encode(root.children[i]);
      sameLevel = sameLevel.right;
    }
    return newNode;
  };
  // Decodes your binary tree to an n-ary tree.
  decode = function(root) {
    if (!root) return null;
    let newNode = new Node(root.val, []);
    let childNode = root.left;
    while (childNode) {
      newNode.children.push(this.decode(childNode));
      childNode = childNode.right;
    }
    return newNode;
  };
}
```