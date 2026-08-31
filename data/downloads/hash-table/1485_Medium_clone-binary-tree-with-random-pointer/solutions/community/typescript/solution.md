# [TypeScript] Breadth-First Search (BFS) with a HashMap - O(n)

**Author:** FilosoF77
**Votes:** 0
**Link:** [https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/3302131/](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/3302131/)

---

# Intuition
Since I do not like recursive functions, the solution immediately came to mind through **BFS**

# Approach
1. Initialize a hash map `mapNodeCopy` which stores the new node if the old node was already traversed before.
2. For each node in the original tree, we do the following:
- We get the current `node` from queue and current node's respective new node `newNode` from hash map;
- If `node`'s left child exists and it is not present in the `mapNodeCopy` hash map then we create a new node, put it in the hash map and queue, and attach the `newNode`'s left pointer with this newly created node;
- Similarly, we repeat the above step for `node`'s right and random pointer nodes;
- Thus, we will attach the left, right and random pointers and will only push unvisited nodes in the queue.


# Code
```
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     random: Node | null
 *     constructor(val?: number, left?: Node | null, right?: Node | null, random?: Node | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomBinaryTree(root: Node | null): NodeCopy | null {
    if (!root) return null;

    let queue: Node[] = [root];
    let mapNodeCopy = new Map<Node, NodeCopy>();
    mapNodeCopy.set(root, new NodeCopy(root.val));

    while (queue.length > 0) {
        const node: Node = queue.shift();
        // since the newNodeCopy is a reference to an object,
        // all data that changes in one iteration will change
        // the object in the hash map
        const newNodeCopy: NodeCopy = mapNodeCopy.get(node);
        
        if (node.left) {
            if (!mapNodeCopy.get(node.left)) {
                mapNodeCopy.set(node.left, new NodeCopy(node.left.val));
                queue.push(node.left);
            }
            newNodeCopy.left = mapNodeCopy.get(node.left);
        }

        if (node.right) {
            if (!mapNodeCopy.get(node.right)) {
                mapNodeCopy.set(node.right, new NodeCopy(node.right.val));
                queue.push(node.right);
            }
            newNodeCopy.right = mapNodeCopy.get(node.right);
        }

        if (node.random) {
            if (!mapNodeCopy.get(node.random)) {
                mapNodeCopy.set(node.random, new NodeCopy(node.random.val));
                queue.push(node.random);
            }
            newNodeCopy.random = mapNodeCopy.get(node.random);
        }
    }
    
    return mapNodeCopy.get(root);
};
```

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$