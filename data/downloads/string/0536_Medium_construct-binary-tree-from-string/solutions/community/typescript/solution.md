# Iterative Approach using a Stack

**Author:** recneps56
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-string/solutions/5190306/](https://leetcode.com/problems/construct-binary-tree-from-string/solutions/5190306/)

---

# Intuition
Whenever I see parenthesis and nested structures my first thought it to use a stack to keep track of the current item.

# Approach
To solve this problem we iterate through the input string. When we encounter a number we know it's a new node. When we encounter a open paren we kno we are going to set a nodes children. When we encounter a closing paren then we are done processing a nodes children.

When getting the number from the input string we need to be aware that the number can be multiple decimal places or negative so we need to handle those edge cases.

# Complexity
- Time complexity: `O (n)` because we go through the entire array once.

- Space complexity: `O (n)` because in the worst case we will store all nodes in the stack.

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function str2tree(s: string): TreeNode | null {
    if (s === null || s.length === 0) {
        return null;
    }
    const stack: TreeNode[] = [];
    let i: number = 0;
    let root: TreeNode = null;
    while (i < s.length) {
        const char: string = s.charAt(i);
        if (/[0-9|-]/.test(char)) {
            // Get the value of the new node
            let start: number = i;
            let end: number = i + 1;
            while (/[0-9|-]/.test(s.charAt(end))) {
                end++;
            }
            i = end;
            const node: TreeNode = new TreeNode(parseInt(s.substring(start, end)));
            // If the root has been processed then we can set the children
            if (root !== null) {
                // Set the left value of the root then set the right
                if (root.left === null) {
                    root.left = node;
                } else {
                    root.right = node;
                }
            }
            stack.push(node);
        } else if (char === '(') {
            // Get the current root before setting it's children
            root = stack[stack.length - 1];
            i++;
        } else if (char === ')') {
            // When we encounter a closing brace we are done with the
            // node at the top of the stack
            stack.pop();
            i++;
        }
    }
    // Return the root at the top of the stack
    return stack.pop();
};
```