# [ typescript / javascript ] DFS solution beats 100% w/ comments

**Author:** carti
**Votes:** 5
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/863903/](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/863903/)

---

```
function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    // lowest common ancestor
    let res: TreeNode | null = null;

    // current deepest node
    let deepest: number = 0;

    // helper dfs method to find deepest leaves for each ancestor
    function dfs(root: TreeNode | null, depth: number): number {
        // set new deepest
        deepest = Math.max(deepest, depth);
        // base case (just return current depth)
        if (!root) return depth;
        // get deepest level in left and right subtrees
        const deepestLeft = dfs(root.left, depth + 1);
        const deepestRight = dfs(root.right, depth + 1);
        // check if deepest in both left and right ARE the deepest
        if (deepestLeft === deepest && deepest === deepestRight) {
            // this means this current node, has all deepest leaves, so set ancestor
            res = root;
        }
        // return the deeper subtree
        return Math.max(deepestLeft, deepestRight);
    }

    // start recursion
    dfs(root, 0);

    return res;
}
```
