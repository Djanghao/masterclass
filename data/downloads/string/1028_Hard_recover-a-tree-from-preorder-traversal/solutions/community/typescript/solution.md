# 💥Both runtime and memory beats 100%! [EXPLAINED]

**Author:** r9n
**Votes:** 11
**Link:** [https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/5778572/](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/5778572/)

---

# Intuition
Imagine you have a string that represents a binary tree where:


Each node is described by a number.
The number of dashes (-) before the number tells you the depth of the node in the tree.
For instance, in the string "1-2--3--4-5--6--7", the root node 1 is at depth 0, its child 2 is at depth 1, and 3 is a child of 2 (because it's at depth 2), and so on.


The intuition is to use a stack to keep track of nodes as we build the tree from the preorder string:


Stack: This will help manage the parent-child relationships. As we process each node, we can decide where to attach it based on the depth information.
Depth Tracking: By counting the dashes, we know the depth of each node and can determine where it should be placed in the tree.


# Approach
Initialize: Start with an empty stack to keep track of nodes and a pointer to read through the string.


Read Nodes:


Count the number of dashes to determine the depth of the current node.
Read the number following the dashes to get the node\u2019s value.


Build the Tree:


Depth Matching: Use the stack to pop nodes until the current node's depth is correctly matched. This ensures that the node is attached to the right parent.


Attach the Node: If the stack is not empty, attach the node to its parent. If the parent already has a left child, the new node becomes the right child.


Push the Node: Add the newly created node to the stack so it can serve as a parent for subsequent nodes.


Return the Tree: The root of the tree will be the bottom-most node left in the stack after processing all nodes.
# Complexity
- Time complexity:


O(n):
We read each character in the string exactly once to determine the node's depth and value, so the time complexity is linear with respect to the length of the string.


- Space complexity:


O(n):
The stack can grow up to the number of nodes in the tree. In the worst case, this means the space used by the stack is proportional to the number of nodes.


# Code
```typescript []
function recoverFromPreorder(traversal: string): TreeNode | null {
    const stack: TreeNode[] = [];
    let i = 0;

    while (i < traversal.length) {
        let level = 0;

        // Count the number of dashes to determine the node level
        while (i < traversal.length && traversal[i] === '-') {
            level++;
            i++;
        }

        // Parse the node value
        let value = 0;
        while (i < traversal.length && traversal[i] >= '0' && traversal[i] <= '9') {
            value = value * 10 + (traversal[i].charCodeAt(0) - '0'.charCodeAt(0));
            i++;
        }

        const node = new TreeNode(value);

        // Adjust the stack to match the current node's level
        while (stack.length > level) {
            stack.pop();
        }

        // Attach the node to its parent
        if (stack.length > 0) {
            if (!stack[stack.length - 1].left) {
                stack[stack.length - 1].left = node;
            } else {
                stack[stack.length - 1].right = node;
            }
        }

        // Push the current node to the stack
        stack.push(node);
    }

    // The root node is the bottom-most element in the stack
    return stack.length > 0 ? stack[0] : null;
}

// Optional helper function to serialize the tree (for testing)
function serialize(root: TreeNode | null): (number | null)[] {
    const result: (number | null)[] = [];
    if (!root) return result;

    const queue: (TreeNode | null)[] = [root];

    while (queue.length > 0) {
        const node = queue.shift()!;
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    // Remove trailing nulls for cleaner output
    while (result.length > 0 && result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}

```