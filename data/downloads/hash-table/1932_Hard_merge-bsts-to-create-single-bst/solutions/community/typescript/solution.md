# TypeScript solution

**Author:** tychty4
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-bsts-to-create-single-bst/solutions/4470559/](https://leetcode.com/problems/merge-bsts-to-create-single-bst/solutions/4470559/)

---

# Approach
DFS

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
// type TreeNode = {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
// }

function canMerge(trees: Array<TreeNode | null>): TreeNode | null {
    const map = new Map<number, TreeNode>();
    for (let i = 0; i < trees.length; i++) {
        map.set(trees[i].val, trees[i]);
    }
    let root: TreeNode | null = trees[0];
    for (let i = 0; i < trees.length; i++) {
        if (map.has(trees[i].val) && attachChildrenFromMap(map, trees[i])) {
            root = trees[i];
            map.set(root.val, root);
        }
    }
    if (map.size === 1 && isValidBST(root)) return root;
    return null;
};

// dfs
function attachChildrenFromMap(map: Map<number, TreeNode>, node: TreeNode): boolean {
    let flag = false;
    if (node.left) {
        if (map.has(node.left.val)) {
            node.left = map.get(node.left.val)
            map.delete(node.left.val);
            flag = attachChildrenFromMap(map, node.left) || flag;
            flag ||= true;
        }
    }
    if (node.right) {
        if (map.has(node.right.val)) {
            node.right = map.get(node.right.val)
            map.delete(node.right.val);
            flag = attachChildrenFromMap(map, node.right) || flag;
            flag ||= true;
        }
    }
    return flag;
}

function isValidBST(node: TreeNode | null, min?: number, max?: number) {
    if (node === null)
        return true;
    if (min !== undefined && node.val <= min)
        return false;
    if (max !== undefined && node.val >= max)
        return false;

    return isValidBST(node.left, min, node.val) &&
        isValidBST(node.right, node.val, max);
}
```