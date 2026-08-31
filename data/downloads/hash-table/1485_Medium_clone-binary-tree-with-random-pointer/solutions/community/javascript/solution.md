# Javascript

**Author:** andyoung
**Votes:** 5
**Link:** [https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/835210/](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/835210/)

---

Use a map to record already cloned nodes.

```javascript
var copyRandomBinaryTree = function(root) {
    if (!root) return null;
    
    const m = new Map();
    const clone = node => {
        if (!node) return null;
        if (m.has(node)) return m.get(node);
        
        const newNode = new NodeCopy(node.val);
        m.set(node, newNode);
        newNode.left = clone(node.left);
        newNode.right = clone(node.right);
        newNode.random = clone(node.random);
        return newNode;
    }
    return clone(root);
}
```