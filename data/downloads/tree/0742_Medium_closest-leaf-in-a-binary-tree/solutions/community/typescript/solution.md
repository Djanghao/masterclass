# O(n+h) DFS + BFS Common Ancestor

**Author:** techytacos
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/5334478/](https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/5334478/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We don't have access to the parents and that's immediately a problem, so we have to build a graph. There are no guarantees on the values despite the examples, so there is likely no min heap / value trickery going on here.

We'd have to find the k Node with the intial graph traversal, and in a tree structure like this, the distance between two nodes is:

`commonAncestorLevel - nodeALevel + commonAncestorLevel - nodeBLevel` so we likely have to find the common ancestor.

# Approach
<!-- Describe your approach to solving the problem. -->
We only have to find common ancestors so we generate a graph of nodes pointing to their parent and keep count of their level in teh graph. Then store each node in a value-to-node hash map. We can achieve this with a quick DFS traversal which should by slightly faster in JS in practice than BFS simply because `Array.prototype.pop()` is built into the platform. When generating the graph, store the leaf nodes in another array.

Then we create a hashmap of value-to-ancestor of the K node. We do this with a simple while loop pushing into the hashmap while traversing the parents.

Finally we do a BFS from each leaf node up its ancestor chain, keeping track of the leaf node and the current ancestor. We also bail out if the current iteration through a leaf's ancestor chain is longer than the current-best distance for real runtime performance (not this fake `O(asdf)` complexity analysis). We do a BFS here instead of DFS because likely run into cases where the ancestor chain of one of the leafs meets with the ancestor of the target at the root. BFS makes sure we don't get stuck in that case. And with BFS, if there are a lot of leaves, we are likely a more-balanced tree, so one of the leaves should reach k's ancestor chain faster.

If a node reaches the ancestor chain of k, we calculate the distance from the leaf node to the common ancestor + the distance from the kNode and the common ancestor. And, if necessary, update the best distance and best leaf.

Then we just return the best leaf

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(n+h)` where `n` is the number of nodes and `h` is the max height of the tree.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`O(n)` where N is number of nodes.

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

function findClosestLeaf(root: TreeNode | null, k: number): number {
    if (!root.left && !root.right) {
        return k;
    }

    // BFS or DFS doesn't matter here because we need to crawl entire graph
    // I reckon DFS is faster in JS with Array.prototype.pop()
    const stack: TreeNode[] = [];
    // Easy access to nodes in new graph
    const graphMap = new Map<number, GraphNode>();
    const leafNodes: GraphNode[] = [];

    stack.push(root);
    graphMap.set(root.val, {val: root.val, parent: null, level: 0});

    // Generate the graph of nodes with parents + level
    while (stack.length) {
        const { val: currVal, left, right } = stack.pop();
        const isLeaf = !left && !right;
        const graphNode = graphMap.get(currVal);

        if (isLeaf) {
            // return early if K is a leaf
            if (currVal === k) {
                return k;
            }

            // keep track of leaf nodes
            leafNodes.push(graphNode);
        }

        if (left) {
            const leftGraphNode = {val: left.val, parent: graphNode, level: graphNode.level + 1};
            graphMap.set(left.val, leftGraphNode);
            stack.push(left);
        }

        if (right) {
            const rightGraphNode = {val: right.val, parent: graphNode, level: graphNode.level + 1};
            graphMap.set(right.val, rightGraphNode);
            stack.push(right);
        }
    }

    // Keep track of all ancesotrs of k
    const ancestors = new Map<number, GraphNode>();
    const kNode = graphMap.get(k);
    let node = kNode;

    // Hydrate the ancestors map
    while (node) {
        ancestors.set(node.val, node);
        node = node.parent;
    }

    // Keep track of current best leaf and best distance
    let bestLeaf: GraphNode | null;
    let bestDistance = Infinity;

    // We are going to BFS each leaf to a common ancestor because DFS might be painful
    // in the case of [1,2,3,4,null,null,5,null,null,null,6,null,7] k=2
    const queue = new BfsQueue<{ leaf: GraphNode, ancestor: GraphNode }>();
    // Queue is of leaf node + current ancestor we BFS-ing up
    leafNodes.forEach(leaf => queue.enqueue({leaf, ancestor: leaf.parent}));

    // BFS for an ancestor that is in k's ancestor chain
    while (queue.size) {
        const { leaf, ancestor } = queue.dequeue();

        if (ancestors.has(ancestor.val)) {
            // calculate the distance between the nodes
            // AKA (kNode.level - ancestor.level) + (leaf.level - ancestor.level)
            const distance = kNode.level + leaf.level - 2 * ancestor.level;
            if (distance < bestDistance) {
                bestLeaf = leaf;
                bestDistance = distance;
            }

            continue;
        }

        queue.enqueue({leaf, ancestor: ancestor.parent});
    }

    return bestLeaf.val;;
};

// standard queue implementation for BFS. Can't call it Queue because it explodes leetcode tisk tisk
class BfsQueue<T> {
    arr: {[idx: number]: T} = {};
    private startIndex = 0;
    private endIndex = 0;

    get size() {
        return this.endIndex - this.startIndex;
    }

    enqueue(item: T) {
        this.arr[this.endIndex] = item;
        this.endIndex++;
    }

    dequeue() {
        const val = this.arr[this.startIndex];
        delete this.arr[this.startIndex];
        this.startIndex++;
        return val;
    }
}

interface GraphNode {
    val: number;
    parent: GraphNode | null;
    level: number;
}

```