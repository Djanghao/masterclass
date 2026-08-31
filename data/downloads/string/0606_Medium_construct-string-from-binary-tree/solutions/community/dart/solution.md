# Beats 100% - Dart - DFS - Without recursion

**Author:** akmzzz
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4377962/](https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4377962/)

---

![\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435.png](./images/0.png)

# Intuition
I have seen plenty of algorithms to solve this using recursion however tail-call optimization is not supported by dart so I I implemented the algorithm using "Stack" (just list in fact) and Set to look for already visited nodes.

# Approach
DFS. The main idea of this solution is to go through nodes until stack is empty. Since the stack is used, we will add right node before left node not vice versa.

# Complexity
- Time complexity: $$O(N)$$, where N is the number of nodes in the binary tree.

- Space complexity: $$O(H)$$, where H is the height of the binary tree

# Code
```
class Solution {
  String tree2str(TreeNode? root) {
    if (root == null) return '';

    // Create an empty stack
    final stack = <TreeNode>[];
    stack.add(root);

    // Create a set to keep track of visited nodes
    final visited = <TreeNode>{};

    final result = StringBuffer();

    while (stack.isNotEmpty) {
      final node = stack.last;

      if (visited.contains(node)) {
        stack.removeLast();
        result.write(')');
      } else {
        visited.add(node);
        result.write('(${node.val}');

        if (node.left == null && node.right != null) {
          result.write('()');
        }

        if (node.right != null) {
          stack.add(node.right!);
        }

        if (node.left != null) {
          stack.add(node.left!);
        }
      }
    }

    // Remove the leading '(' and trailing ')'
    return result.toString().substring(1, result.length - 1);
  }
}
```