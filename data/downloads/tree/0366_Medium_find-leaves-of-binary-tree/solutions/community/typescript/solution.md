# Using DFS & Parent map

**Author:** danrz
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/5485640/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/5485640/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
* Store a Map of node -> parent
* Using DFS, scan the leaves and add the node -> parent mapping
* Iterate the leaves queue, and for each leaf, set its parent reference of right/left to null (get the parent using the map)
* When the parent is a leaf (no right & left), add it to the result

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

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

function findLeaves(root: TreeNode | null): number[][] {
    // using dfs, search the leaves for each subtree 
    // add them to the list
    // add their parents to a queue
    // iterate the queue, collect, and add the parents and repeat
    
    const result: number[][] = []
    if(!root) return result

    function isLeaf(node:TreeNode) {
        return !node.left && !node.right
    }

    const parentMap = new Map<TreeNode, TreeNode>()

    function dfs(node: TreeNode | null, leaves: TreeNode[]) {
        if(!node) return

        if(isLeaf(node)) {
            leaves.push(node)
            return
        }
        
        if(node.left) {
            parentMap.set(node.left, node)
            dfs(node.left, leaves)
        }

        if(node.right) {
            parentMap.set(node.right, node)
            dfs(node.right, leaves)
        }
    }

    let leaves: TreeNode[] =[]
    dfs(root, leaves)
    
    let idx = 0
    while(leaves.length > 0) {
        const next = new Set<TreeNode>()

        while(leaves.length > 0) {
            const n = leaves.shift()
            result[idx] ??= []
            result[idx].push(n.val)
            if(parentMap.has(n)) {
                const parent = parentMap.get(n)
                if(parent.right === n) parent.right = null
                if(parent.left === n) parent.left = null
                if(isLeaf(parent)) {
                    next.add(parent)
                }
            }
        }
        leaves = Array.from(next)
        idx++
    }

    return result
};
```