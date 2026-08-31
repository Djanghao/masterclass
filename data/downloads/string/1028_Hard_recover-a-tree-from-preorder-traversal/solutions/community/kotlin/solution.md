# Reconstruct Binary Tree from Preorder Traversal: Optimal Stack-Based Approach

**Author:** crazyycoder805
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/5090360/](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/5090360/)

---

# Intuition
To recover the binary tree from the preorder traversal, we can use a stack to keep track of the nodes as we traverse the traversal string.
# Approach
Initialize an empty stack.
Iterate through the traversal string character by character.
Count the number of dashes to determine the depth of the current node.
Extract the value of the current node.
Pop nodes from the stack until the depth of the stack is greater than the depth of the current node.
Connect the current node to its parent node (if exists) and push it onto the stack.
Return the root of the binary tree.
# Complexity
- Time complexity:
O(n), where n is the length of the traversal string.
- Space complexity:
O(n), where h is the height of the binary tree, representing the maximum number of nodes in the stack at any point during the traversal.
# Code
```
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var recoverFromPreorder = function (traversal) {
    let stack = [];
    let i = 0;

    while (i < traversal.length) {
        let level = 0;
        while (traversal[i] === '-') {
            level++;
            i++;
        }
        
        let val = '';
        while (i < traversal.length && traversal[i] !== '-') {
            val += traversal[i];
            i++;
        }
        const node = new TreeNode(parseInt(val));

        while (stack.length > level) {
            stack.pop();
        }

        if (stack.length > 0) {
            if (!stack[stack.length - 1].left) {
                stack[stack.length - 1].left = node;
            } else {
                stack[stack.length - 1].right = node;
            }
        }

        stack.push(node);
    }

    return stack[0];
};

```