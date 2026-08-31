# 132ms in JavaScript

**Author:** linfongi
**Votes:** 47
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/45467/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/45467/)

---

    var preorderTraversal = function(root) {
      if (!root) return [];
      var result = [];
      var stack = [root];
      
      while(stack.length) {
        var node = stack.pop();
        result.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
      }
      return result;
    };