# Iterative & Recursive JS Solutions

**Author:** hbjORbj
**Votes:** 26
**Link:** [https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/880981/](https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/880981/)

---

```
// Iterative Solution
var postorderTraversal = function(root) {
    if (!root) return [];
    let stack = [], res = [];
    stack.push(root);
    while (stack.length) {
        let node = stack[stack.length-1];
        if (node.left) {
            stack.push(node.left);
            node.left = null;
        }
        else if (node.right) {
            stack.push(node.right);
            node.right = null;
        }
        else res.push(stack.pop().val);
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};
```

```
// Recursive Solution
var postorderTraversal = function(root) {
    let res = [];
    traverse(root);
    return res;
    
    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        traverse(node.right);
        res.push(node.val);
    }
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};
```