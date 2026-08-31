# [typescript/javascript] easy DFS solution w/ comments

**Author:** carti
**Votes:** 4
**Link:** [https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/861092/](https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/861092/)

---

```
function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    // create set of to_delete for o(1) lookups
    const toDelete = new Set(to_delete);
    // result list
    const res: (TreeNode | null)[] = [];

    // helper dfs method to prune tree and add to set
    function dfs(node: TreeNode | null, isRoot: boolean): TreeNode | null {
        // base case
        if (!node) return null;

        // check if this node should be pruned
        const deleted = toDelete.has(node.val);

        // check if root and shouldn't be deleted
        if (isRoot && !deleted) res.push(node);

        // build left and right subtrees, left and right will be ROOTS if this was deleted
        node.left = dfs(node.left, deleted);
        node.right = dfs(node.right, deleted);

        // if this one was pruned, return null, if not, return this node
        return deleted ? null : node;
    }

    // start dfs pruning
    dfs(root, true);

    return res;
}
```
