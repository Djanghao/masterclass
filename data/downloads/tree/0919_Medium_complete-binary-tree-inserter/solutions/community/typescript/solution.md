# Constant Time Complexity Solution for Insertion

**Author:** Abe10
**Votes:** 0
**Link:** [https://leetcode.com/problems/complete-binary-tree-inserter/solutions/5252341/](https://leetcode.com/problems/complete-binary-tree-inserter/solutions/5252341/)

---

# Intuition
To solve this problem, we can use a Breadth-First Search (BFS) approach to ensure that we always insert nodes at the correct position to maintain the properties of a complete binary tree. By using a queue, we can efficiently track the nodes that need children and insert new nodes accordingly.

# Approach 

## Initialization (CBTInserter constructor):

- Initialize the data structure with the root of the complete binary tree.
- Use a queue to perform a level-order traversal to find all nodes that are missing at least one child.

## Insert Operation (insert method):

- The queue helps us identify the node that should receive the new child.
- Insert the new node as a left child if the left child is missing; otherwise, insert it as a right child.
- After inserting, if a node now has both children, remove it from the queue.
- Add the newly inserted node to the queue since it might need children in the future.

## Get Root (get_root method):

- Simply return the root of the tree.

# Complexity
- Time complexity:
    - Initialization (Constructor CBTInserter): O(n)
    - Insertion (insert method): O(1)
    - Getting Root (get_root method): O(1)

- Space complexity:
    - Initialization (Constructor CBTInserter): O(n)
    - Insertion (insert method): O(n)
    - Getting Root (get_root method): O(1)

# Code
```
class CBTInserter {
  private root: TreeNode;
  private queue: TreeNode[];

  constructor(root: TreeNode) {
    this.root = root;
    this.queue = [];

    // Perform a level-order traversal to initialize the queue with nodes missing children
    const bfsQueue: TreeNode[] = [root];
    while (bfsQueue.length > 0) {
      const node = bfsQueue.shift()!;
      if (!node.left || !node.right) {
        this.queue.push(node);
      }
      if (node.left) bfsQueue.push(node.left);
      if (node.right) bfsQueue.push(node.right);
    }
  }

  insert(v: number): number {
    const newNode = new TreeNode(v);
    const parent = this.queue[0]; // The node which needs children

    if (!parent.left) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
      this.queue.shift(); // Remove node from queue if it has both children now
    }

    this.queue.push(newNode); // Add new node to queue (it might need children in the future)
    return parent.val;
  }

  get_root(): TreeNode {
    return this.root;
  }
}
```